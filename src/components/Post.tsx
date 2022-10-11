import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";
import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

interface Author {
	avatarUrl: string;
	name: string;
	role: string;
}

interface Content {
	type: "paragraph" | "link";
	contentText: string;
	url: string;
}

interface PostProps {
	id: number;
	author: Author;
	publishedAt: Date;
	content: Content[];
}

export function Post(props: PostProps) {
	const { author, content, publishedAt } = props;
	const [comments, setComments] = useState<string[]>([]);
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

	function handleCreateNewComment(e: FormEvent) {
		e.preventDefault();

		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
		e.target.setCustomValidity("");
		setNewCommentText(e.target.value);
	}

	function handleNewInvalidComment(e: InvalidEvent<HTMLTextAreaElement>) {
		e.target.setCustomValidity("Por favor, insira um comentário.");
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutCommentToDelete = comments.filter(
			(comment) => comment != commentToDelete
		);

		setComments(commentsWithoutCommentToDelete);
	}

	const isNewCommentEmpty = newCommentText.length === 0;

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
							return <p key={line.contentText}>{line.contentText}</p>;
						case "link":
							return (
								<p key={line.contentText}>
									<a href={line.url} target='_blank'>
										{line.contentText}
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
					onChange={handleNewCommentChange}
					placeholder='Deixe um comentário'
					onInvalid={handleNewInvalidComment}
					required
				/>
				<footer>
					<button disabled={isNewCommentEmpty} type='submit'>
						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							content={comment}
							key={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}
