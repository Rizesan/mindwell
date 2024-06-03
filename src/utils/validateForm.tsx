import * as yup from "yup";

export const LoginValidate = yup.object().shape({
    password: yup.string().trim().required("La contraseña es requerida."),
    username: yup.string().trim().required("El usuario es requerido."),
});