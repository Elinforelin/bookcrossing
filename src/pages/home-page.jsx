import styles from "../styles/Home.module.css";
import BooksList from "./../components/BooksList/index";

import Header from "./../components/Hader/index";

export default function Home() {

	return (
		<div className={styles.container}>
			<Header />
			<main>
				<BooksList />
			</main>
		</div>
	);
}

// export async function getStaticProps(context) {
// 	const response = await fetch(
// 		`https://bookcrossingapi.herokuapp.com/api/v1/books`
// 	);
// 	const books = await response.json();

// 	return {
// 		props: { books },
// 	};
// }
