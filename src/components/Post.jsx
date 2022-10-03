import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header className={styles.header}>
				<div className={styles.author}>
					<Avatar src='https://github.com/guilhermerera.png/' />
					<div className={styles.authorInfo}>
						<strong>Guilherme Ferreira</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time title='11 de maio às 08h13' dateTime='2022-05-11 08:13:30'>
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>
					Só pra contar que to fazendo o Ignite da Rocketseat. Esse é o primeiro
					projeto do Bootcamp de ReactJS, usado durante as aulas para fortalecer
					conceitos base da biblioteca, como componentização, uso de
					propriedades, css modules, iterações, alguns hooks e também alguns
					conceitos de programação, como a programação declarativa e
					imutabilidade.
				</p>
				<p>
					Sempre bom fortalecer o alicerce antes de construir o segundo andar.
					;)
				</p>
				<p>
					Você vai poder conferir a evolução no{" "}
					<a href='https://github.com/guilhermerera' target='_blank'>
						meu github.
					</a>
				</p>

				<p>
					<a href='#'>#novoprojeto</a> <a href='#'>#ignite</a>{" "}
					<a href='#'>#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu comentário</strong>
				<textarea placeholder='Deixe um comentário' />
				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
