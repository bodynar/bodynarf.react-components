import Card from "./component";
import CardHeader from "./components/header";
import CardBody from "./components/body";
import CardFooter from "./components/footer";

export * from "./types";

export default Object.assign(Card, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
});
