import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import classes from "./index.module.css";
import { fetchBooks } from "../../store/books/reducer";
import { selectBooks } from "../../store/books/selector";
import { addToCart } from "../../store/shoppigCart/reducer";
import { getShoppingCart } from "./../../store/shoppigCart/selector";

const BooksList = () => {
	const [disabledArr, setDisabledArr] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchBooks());
	}, []);
	const books = useSelector(selectBooks);

	const addToCartClick = (book) => {
		setDisabledArr((prev) => [...prev, book.id]);

		dispatch(addToCart(book));
	};

	return (
		<div className={classes.main}>
			{books.list.map((book) => (
				<div key={book.id} className={classes.book}>
					<img
						src={book.image}
						className={
							disabledArr.indexOf(book.id) !== -1
								? classes.disabledBook
								: classes.image
						}
						alt="#"
					/>
					<div>{book.author}</div>
					<div className={classes.title}>
						{'"'}
						{book.title}
						{'"'}
					</div>
					<button
						name={book.id}
						disabled={disabledArr.indexOf(book.id) !== -1}
						onClick={() => addToCartClick(book)}
						className={classes.addBtn}
					>
						{disabledArr.indexOf(book.id) !== -1
							? "Додано до кошика"
							: "Додати до кошика"}
					</button>
				</div>
			))}
		</div>
	);
};

export default BooksList;
