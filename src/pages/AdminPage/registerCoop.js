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
        name: Yup.string()
            .min(1, "Muito curto!")
            .max(50, "Muito Longo!")
            .required("Campo Obrigatório"),
        coopCode: Yup.string()
            .typeError("Apenas números")
            .min(4, "Deve conter 4 números")
            .max(4, "Deve conter 4 números")
            .required("Campo Obrigatório"),
    });

    async function handleOnSubmit(values, resetForm) {
        await api
            .post("/cooperative", {
                name: values.name,
                codCoop: values.coopCode,
            })
            .then((response) => {
                dispatch(
                    openSnackbar({
                        message: "Cooperativa criada com sucesso",
                        severity: "success",
                    })
                );
                resetForm({});
            })
            .catch((e) => {
                dispatch(
                    openSnackbar({
                        message: e.response.data,
                        severity: "error",
                    })
                );
            });
    }

    return (
        <div className={pageStyles.container}>
            <div className={pageStyles.leftContainer}>
                <div className={pageStyles.title}>
                    <img alt="Sicredi Logo" src={Sicredi} />
                    <div className={pageStyles.textRegister}>Cadastro</div>
                    <div className={pageStyles.textPlaceholder}>
                        Realize o cadastro das cooperativas aqui.
                    </div>
                </div>
            </div>
            <div className={pageStyles.rightContainer}>
                <Formik
                    initialValues={{
                        name: "",
                        coopCode: "",
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
                                error={!!(touched.name && errors.name)}
                                helperText={touched.name && errors.name}
                                name="name"
                                label="Nome Cooperativa"
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
