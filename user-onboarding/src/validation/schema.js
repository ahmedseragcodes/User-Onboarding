import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string(),
    email: yup
    .string(),
    password: yup
    .string(),
    termsOfService: yup.boolean(),
})