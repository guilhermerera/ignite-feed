import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

export default function Comment({ content, onDeleteComment }) {
	const [kudosCount, setKudosCount] = useState(0);
	const [wasKudosGiven, setWasKudosGiven] = useState(false);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleGiveKudos() {
		const newKudosCount = wasKudosGiven ? kudosCount - 1 : kudosCount + 1;
		setWasKudosGiven((prev) => !prev);
		setKudosCount(newKudosCount);
	}

	return (
		<div className={styles.comment}>
			<Avatar noBorder src='https://github.com/guilhermerera.png' />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Guilherme Ferreira</strong>
							<time time='11 de maio às 08:13h' dateTime='2202-05-11 08:13:30'>
								Cerca de 1h atrás
							</time>
						</div>
						<button onClick={handleDeleteComment} title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button
						className={wasKudosGiven && styles["kudos-given"]}
						onClick={handleGiveKudos}>
						<ThumbsUp />
						Kudos
						<span>{kudosCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
