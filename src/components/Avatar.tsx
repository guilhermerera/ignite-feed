import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	noBorder?: boolean;
}

export default function Avatar(props: AvatarProps) {
	const { noBorder = false } = props;
	return (
		<img
			className={noBorder ? styles.avatarNoBorder : styles.avatar}
			{...props}
		/>
	);
}
