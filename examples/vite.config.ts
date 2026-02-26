import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths({ root: path.resolve(__dirname, "..") }),
    ],
    resolve: {
        alias: {
            "@bodynarf/react.components": path.resolve(__dirname, "../dist"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
        },
    },
});
