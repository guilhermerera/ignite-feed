import styles from "./Avatar.module.css";

export default function Avatar(props) {
	const { src, noBorder = false } = props;
	return (
		<img
			className={noBorder ? styles.avatarNoBorder : styles.avatar}
			src={src}
		/>
	);
}
