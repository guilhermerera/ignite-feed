import { ThumbsUp, Trash } from "phosphor-react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

interface CommentProps {
	content: string;
	onDeleteComment: (param: string) => void;
}

export default function Comment(props: CommentProps) {
	const { content, onDeleteComment } = props;
	const [kudosCount, setKudosCount] = useState(0);
	const [wasKudosGiven, setWasKudosGiven] = useState(false);

	const publishedAt = new Date();

	const formatedPublishedDate = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{ locale: ptBR }
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	});

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
			<Avatar
				noBorder
				src='https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png'
			/>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>You</strong>
							<time
								title={formatedPublishedDate}
								dateTime={publishedAt.toISOString()}>
								{publishedDateRelativeToNow}
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
						className={wasKudosGiven ? styles["kudos-given"] : ""}
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
