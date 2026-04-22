/**
 * ESLint rule: hooks-grouped
 *
 * Предупреждает, когда вызовы хуков в React компоненте не сгруппированы вместе.
 * Все хуки должны образовывать единый непрерывный блок без вставок не-хукового кода между ними.
 *
 * Плохо:
 *   const [a, setA] = useState(0);
 *   const x = someHelper();        // не-хук разрывает группу
 *   const [b, setB] = useState(1); // хук после не-хука — предупреждение
 *
 * Хорошо:
 *   const [a, setA] = useState(0);
 *   const [b, setB] = useState(1);
 *   const x = someHelper();
 */

export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce hooks to be grouped together in a consecutive block",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: null,
    schema: [],
    messages: {
      hooksNotGrouped:
        "Hook '{{hookName}}' should be grouped with other hooks. Move all hooks into a single consecutive block.",
    },
  },

  create(context) {
    /**
     * Проверяет, является ли узел вызовом хука (имя начинается с "use" + заглавная буква).
     */
    function isHookCall(node) {
      if (node.type !== "CallExpression") return false;
      const callee = node.callee;
      return callee.type === "Identifier" && /^use[A-Z]/.test(callee.name);
    }

    /**
     * Извлекает узел вызова хука из statement, если он есть.
     * Поддерживает:
     *   const x = useHook()
     *   const [a, b] = useHook()
     *   useEffect(...)
     */
    function getHookCallFromStatement(statement) {
      if (statement.type === "VariableDeclaration") {
        for (const declarator of statement.declarations) {
          if (declarator.init && isHookCall(declarator.init)) {
            return declarator.init;
          }
        }
      } else if (
        statement.type === "ExpressionStatement" &&
        isHookCall(statement.expression)
      ) {
        return statement.expression;
      }
      return null;
    }

    /**
     * Проверяет список statements: все хуки должны идти одним непрерывным блоком.
     */
    function checkStatements(statements) {
      let seenHook = false;
      let gapAfterHooks = false;

      for (const statement of statements) {
        const hookCall = getHookCallFromStatement(statement);

        if (hookCall) {
          if (seenHook && gapAfterHooks) {
            context.report({
              node: hookCall,
              messageId: "hooksNotGrouped",
              data: { hookName: hookCall.callee.name },
            });
          }
          seenHook = true;
        } else {
          if (seenHook) {
            gapAfterHooks = true;
          }
        }
      }
    }

    function isReactComponent(node) {
      if (node.type === "FunctionDeclaration") {
        return node.id && /^[A-Z]/.test(node.id.name);
      }
      if (
        node.type === "ArrowFunctionExpression" ||
        node.type === "FunctionExpression"
      ) {
        const parent = node.parent;
        return (
          parent &&
          parent.type === "VariableDeclarator" &&
          parent.id &&
          /^[A-Z]/.test(parent.id.name)
        );
      }
      return false;
    }

    return {
      FunctionDeclaration(node) {
        if (isReactComponent(node) && node.body?.body) {
          checkStatements(node.body.body);
        }
      },
      ArrowFunctionExpression(node) {
        if (
          isReactComponent(node) &&
          node.body?.type === "BlockStatement"
        ) {
          checkStatements(node.body.body);
        }
      },
      FunctionExpression(node) {
        if (isReactComponent(node) && node.body?.body) {
          checkStatements(node.body.body);
        }
      },
    };
  },
};
