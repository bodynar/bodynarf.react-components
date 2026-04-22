import ModalWrapper from "./component";
import ModalWrapperHeader from "./components/header";
import ModalWrapperBody from "./components/body";
import ModalWrapperFooter from "./components/footer";

export * from "./types";

export default Object.assign(ModalWrapper, {
    Header: ModalWrapperHeader,
    Body: ModalWrapperBody,
    Footer: ModalWrapperFooter,
});
