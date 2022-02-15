import { useRouter } from "next/router";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { setModalActive } from "../../store/modal/reducer";
import { getQuantiti } from "../../store/shoppigCart/selector";
import A from "../A";
import BooksForm from "../BooksForm";
import GoogleBtn from "../GoogleButton";
import Modal from "../Modal";
import classes from "./style.module.css";

const Header: FC = () => {
	const dispatch = useDispatch();
	const quantiti = useSelector(getQuantiti);
	const openModal = () => {
		dispatch(setModalActive());
	};
	// const match = useMatch("shopping-cart");
	const { pathname } = useRouter();

	console.log(pathname);

	return (
		<header className={classes.header}>
			<A href={"/home-page"} text="Усi книги" />
			<A href={"/privat-room"} text="Особистий кабінет" />
			{pathname !== "/shopping-cart" && (
				<button onClick={openModal} className={classes.modalActiveButton}>
					Додати книгу
				</button>
			)}
			{pathname !== "/shopping-cart" && <GoogleBtn />}

			{/* <Login className={classes.googleBtn} /> */}
			<div className={classes.shoppingCart}>
				<A href={"/shopping-cart"} text={`Кошик: ${quantiti}`} />
			</div>

			<Modal>
				<BooksForm />
			</Modal>
		</header>
	);
};

export default Header;
