import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

export function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post author='Guilherme Ferreira' content='Lueco és pueco manitoo' />
					<Post author='Guilherme Ferreira' content='Lueco és pueco manitoo' />
				</main>
			</div>
		</>
	);
}
