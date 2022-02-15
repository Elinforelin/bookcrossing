import { useSelector } from "react-redux";
import { getShoppingCart } from "./../store/shoppigCart/selector";
import Header from "./../components/Hader/index";
import classes from "./index.module.css";

const ShoppingCart = () => {
	const shoppingCart = useSelector(getShoppingCart);
	console.log(shoppingCart);

	return (
		<div>
			<Header />
			<div className={classes.booksInShoppingCart}>
				{shoppingCart.map(({ author, id, image, title }) => (
					<div key={id}>
						<img src={image} alt="#" />
						<span>{author}</span>
						<div className={classes.title}>
							{'"'}
							{title}
							{'"'}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ShoppingCart;
