import { usernameRules, validateEmail, withoutSpaceBetweenLetter } from "./helpers/regexValidation";
import type { IValidationValues } from "@/ts/interfaces/IValidationValues";
import type { IErrorMessage } from "@/ts/interfaces/IErrorMessage";

const checkValidate = (
	value: string,
	regex: RegExp,
	errorMessage: string
): { isError: boolean; message?: string } => {
	if (!regex.test(value)) {
		return {
			isError: true,
			message: errorMessage
		};
	};

	return {
		isError: false,
		message: ""
	};
};

export const validationSchema = ({ username, email, password }: IValidationValues): IErrorMessage => {
	const result: IErrorMessage = {
		username: { isError: false },
		email: { isError: false },
		password: { isError: false },
	};

	result.username = checkValidate(
		username,
		usernameRules,
		"The username can only contain letters, numbers, and _ without spaces"
	);

	result.email = checkValidate(
		email,
		validateEmail,
		"Invalid email address"
	);

	result.password = checkValidate(
		password,
		withoutSpaceBetweenLetter,
		"There must be no special characters or spaces in the password"
	);

	if (username.length < 4 || username.length > 30) {
		result.username = {
			isError: true,
			message: "Username must be between 4 and 30 characters",
		};
	}

	if (password.length < 6 || password.length > 30) {
		result.password = {
			isError: true,
			message: "Password must be between 6 and 30 characters",
		};
	}

	return result;
};