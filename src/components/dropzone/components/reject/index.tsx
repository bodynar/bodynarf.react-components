import { FC } from "react";

import { DropzoneRejectProps } from "../..";

/**
 * Dropzone.Reject — slot that declares the content shown while rejected
 * files (not matching {@link DropzoneProps.accept}) are being dragged over the dropzone.
 *
 * Rendered by the parent Dropzone; returns null when used standalone.
 */
const DropzoneReject: FC<DropzoneRejectProps> = () => null;

export default DropzoneReject;
