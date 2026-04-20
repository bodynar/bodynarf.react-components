import { FC } from "react";

import "./style.scss";

import { SkeletonText, SkeletonBlock, SkeletonAvatar, SkeletonButton } from "../components";

/**
 * Skeleton loading placeholders.
 *
 * Use sub-components to compose skeleton layouts:
 * - `Skeleton.Text`   — one or more text-line placeholders
 * - `Skeleton.Block`  — arbitrary rectangular placeholder
 * - `Skeleton.Avatar` — circular / square avatar placeholder
 * - `Skeleton.Button` — button-shaped placeholder
 */
const Skeleton: FC & {
    Text: typeof SkeletonText;
    Block: typeof SkeletonBlock;
    Avatar: typeof SkeletonAvatar;
    Button: typeof SkeletonButton;
} = () => null;

Skeleton.Text = SkeletonText;
Skeleton.Block = SkeletonBlock;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Button = SkeletonButton;

export default Skeleton;
