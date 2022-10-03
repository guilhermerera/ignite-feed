import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

import Avatar from "./Avatar";

export default function Comment() {
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
						<button title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>
					<p>Muito bom parça!</p>
				</div>
				<footer>
					<button>
						<ThumbsUp />
						Aplaudir
						<span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
