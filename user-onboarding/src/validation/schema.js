import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("Name is a required field"),
    email: yup
    .string()
    .email("Must be a valid Email")
    .required("Email is required"),
    password: yup
    .string()
    .required("A Password is required")
    .min(6, "Password must be at-least 6 characters"),
    termsOfService: yup
    .boolean()
});