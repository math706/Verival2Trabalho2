import React from "react";
import { useDispatch } from "react-redux";

import { useMediaQuery } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { openSnackbar } from "../../actions/snackbarActions.js";
import Sicredi from "../../assets/Sicredi.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputMask from "../../components/InputMask";
import api from "../../services/api";
import theme from "../../styles/customMuiTheme";
import Styles from "./styles";

export default function RegisterCoop() {
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const pageStyles = Styles(isMobile);
    const dispatch = useDispatch();

    const SignupSchema = Yup.object().shape({
        adminCode: Yup.string()
            // .typeError("Apenas números")
            // .min(4, "Deve conter 4 números")
            // .max(4, "Deve conter 4 números")
            .required("Campo Obrigatório"),
        password: Yup.string()
            .matches(
                "(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*",
                "Pelo menos 6 alfanuméricos contendo letras minúsculas e maiúsculas"
            )
            .required("Campo Obrigatório"),
        coopCode: Yup.string()
            .typeError("Apenas números")
            .min(4, "Deve conter 4 números")
            .max(4, "Deve conter 4 números")
            .required("Campo Obrigatório"),
    });

    async function handleOnSubmit(values, resetForm) {
        await api
            .post("/login/register-cooperative", {
                document: values.adminCode,
                password: values.password,
                codCoop: values.coopCode,
            })
            .then((response) => {
                dispatch(
                    openSnackbar({
                        message: "Usuário de administrador criado com sucesso",
                        severity: "success",
                    })
                );
                resetForm({});
            })
            .catch((error) => {
                if (typeof error.response.data === "string") {
                    dispatch(
                        openSnackbar({
                            message: error.response.data,
                            severity: "error",
                        })
                    );
                } else {
                    dispatch(
                        openSnackbar({
                            message: "Falha ao registrar um administrador",
                            severity: "error",
                        })
                    );
                }
            });
    }

    return (
        <div className={pageStyles.container}>
            <div className={pageStyles.leftContainer}>
                <div className={pageStyles.title}>
                    <img alt="Sicredi Logo" src={Sicredi} />
                    <div className={pageStyles.textRegister}>Cadastro</div>
                    <div className={pageStyles.textPlaceholder}>
                        Realize o cadastro dos administradores da cooperativa.
                    </div>
                </div>
            </div>
            <div className={pageStyles.rightContainer}>
                <Formik
                    initialValues={{
                        adminCode: "",
                        coopCode: "",
                        password: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values, { resetForm }) => {
                        await handleOnSubmit(values, resetForm);
                    }}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <Field
                                className={pageStyles.input}
                                error={
                                    !!(touched.adminCode && errors.adminCode)
                                }
                                helperText={
                                    touched.adminCode && errors.adminCode
                                }
                                name="adminCode"
                                label="Codigo Administrador"
                                as={Input}
                            />
                            <Field
                                className={pageStyles.input}
                                type="password"
                                error={!!(touched.password && errors.password)}
                                helperText={touched.password && errors.password}
                                name="password"
                                label="Senha"
                                as={Input}
                            />
                            <Field
                                className={pageStyles.lastInput}
                                error={!!(touched.coopCode && errors.coopCode)}
                                helperText={touched.coopCode && errors.coopCode}
                                name="coopCode"
                                label="Codigo Cooperativa"
                                mask={"9999"}
                                as={InputMask}
                            />
                            <Button
                                disabled={isSubmitting}
                                fullWidth
                                color="dark"
                                type="submit"
                            >
                                Cadastrar
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
