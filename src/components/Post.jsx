import { format, formatDistanceToNow } from "date-fns";
import { set } from "date-fns/esm";
import ptBR from "date-fns/locale/pt-BR";
import { useEffect } from "react";
import { useState } from "react";
import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
	const [comments, setComments] = useState([]);
	const [newCommentText, setNewCommentText] = useState("");

	const formatedPublishedDate = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{ locale: ptBR }
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	});

	useEffect(() => {
		setNewCommentText("");
	}, [comments]);

	function handleCreateNewComment(e) {
		e.preventDefault();

		setComments([...comments, newCommentText]);
	}

	return (
		<article className={styles.post}>
			<header className={styles.header}>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time
					title={formatedPublishedDate}
					dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					switch (line.type) {
						case "paragraph":
							return <p key={line.content}>{line.content}</p>;
						case "link":
							return (
								<p key={line.content}>
									<a href={line.url} target='_blank'>
										{line.content}
									</a>
								</p>
							);
					}
				})}
			</div>

			<form
				onSubmit={(e) => {
					handleCreateNewComment(e);
				}}
				className={styles.commentForm}>
				<strong>Deixe seu comentário</strong>
				<textarea
					value={newCommentText}
					onChange={(e) => {
						setNewCommentText(e.target.value);
					}}
					placeholder='Deixe um comentário'
				/>
				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return <Comment content={comment} key={comment} />;
				})}
			</div>
		</article>
	);
}
