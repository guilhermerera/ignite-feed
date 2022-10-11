import styles from "./Avatar.module.css";

interface AvatarProps {
	src: string;
	noBorder?: boolean;
}

export default function Avatar(props: AvatarProps) {
	const { src, noBorder = false } = props;
	return (
		<img
			className={noBorder ? styles.avatarNoBorder : styles.avatar}
			src={src}
		/>
	);
}
