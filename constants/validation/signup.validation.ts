import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from "../../utils/validators";

export const signupSchema = (field: string, value: string) => {
  switch (field) {
    case "phoneNumber":
      return validatePhoneNumber(value);
    case "email":
      return validateEmail(value);
    case "password":
      return validatePassword(value);
    case "firstName":
      return !value || value.trim().length < 2
        ? "First Name must be at least 2 characters"
        : null;
    case "lastName":
      return !value || value.trim().length < 2
        ? "Last Name must be at least 2 characters"
        : null;
    default:
      return "Invalid field";
  }
};

export const loginSchema = (field: string, value: string) => {
  switch (field) {
    case "email":
      return validateEmail(value);
    case "password":
      return validatePassword(value);
    default:
      return "Invalid field";
  }
};
