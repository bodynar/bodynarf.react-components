import Dropzone from "./component";
import DropzoneAccept from "./components/accept";
import DropzoneIdle from "./components/idle";
import DropzoneReject from "./components/reject";

export * from "./types";

export default Object.assign(Dropzone, {
    Idle: DropzoneIdle,
    Accept: DropzoneAccept,
    Reject: DropzoneReject,
});
