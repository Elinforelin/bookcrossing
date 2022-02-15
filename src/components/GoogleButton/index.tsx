import { FC, useCallback } from "react";
import GoogleButton from "react-google-button";

import classes from "./style.module.css";

const GoogleBtn: FC = () => {
	const openGoogleLoginPage = useCallback(() => {
		const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";

		const scope = ["openid", "profile", "email"].join(" ");

		const params = {
			response_type: "code",
			client_id:
				"546950215060-3biab9fr7p8kbe3dtd9f7p88lbnvda28.apps.googleusercontent.com",
			redirect_uri: "https://bookcrossingapi.herokuapp.com/api/v1/login/google",
			prompt: "select_account",
			access_type: "offline",
			scope,
		};

		const urlParams = new URLSearchParams(params).toString();

		window.location.href = `${googleAuthUrl}?${urlParams}`;
	}, []);

	return (
		<GoogleButton
			className={classes.googleBtn}
			type="dark"
			onClick={openGoogleLoginPage}
			style={{ backgroundColor: "rgb(34, 33, 34)", margin: "10px" }}
		/>
	);
};

export default GoogleBtn;
