import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object, mixed } from "yup";
import { setModalActive } from "../../store/modal/reducer";
import { useDispatch } from "react-redux";
import classes from "./booksForm.module.css";

type Inputs = {
	title: string;
	author: string;
	image: string;
};

const schema = object({
	title: string().required("Будь ласка, введіть повне ім'я автора"),
	author: string().required("Будь ласка, введіть назву твору"),
	image: string().required(),
});

const BooksForm: FC = () => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<Inputs>({ resolver: yupResolver(schema) });

	const [imageFile, setImageFile] = useState<null | File>(null);

	const createBook: SubmitHandler<Inputs> = (data) => {
		const formData = new FormData();

		formData.append("title", data.title);
		formData.append("author", data.author);
		formData.append("image", imageFile);

		fetch("https://bookcrossingapi.herokuapp.com/api/v1/books", {
			method: "POST",
			credentials: "include",
			body: formData,
		});
		reset();
		dispatch(setModalActive());
		window.location.reload();
	};
	const closeModalWindow = () => {
		dispatch(setModalActive());
	};

	return (
		<form
			onSubmit={handleSubmit(createBook)}
			method="post"
			className={classes.form}
		>
			<div className={classes.block}>
				Автор
				<div>
					<input
						// className={classes.input}
						{...register("title")}
						placeholder="Пушкiн А.С."
					/>
					<p className={classes.error}>{errors.title?.message}</p>
				</div>
			</div>

			<div className={classes.block}>
				Назва книги(введiть назву без лапок)
				<div>
					<input
						// className={classes.input}
						{...register("author")}
						placeholder="Золота рибка"
					/>
					<p className={classes.error}>{errors.author?.message}</p>
				</div>
			</div>

			<div className={classes.block}>
				Фото книги
				<div className={classes.inputFile}>
					<input
						{...register("image", {
							onChange: (event) => {
								setImageFile(event.target.files[0]);
							},
						})}
						type="file"
					/>
					<p className={classes.error}>{errors.image?.message}</p>
				</div>
			</div>
			<div className={classes.buttons}>
				<button className={classes.add}>Додати</button>
				<button className={classes.close} onClick={closeModalWindow}>
					Закрити
				</button>
			</div>

			<DevTool control={control} />
		</form>
	);
};

export default BooksForm;
