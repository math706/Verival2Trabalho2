import React from "react";
import { useDispatch } from "react-redux";

import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { openSnackbar } from "../../actions/snackbarActions.js";
import Table from "../../components/Table";
import useApiRequest from "../../hooks/useApiRequest.js";
import api from "../../services/api.js";
import theme from "../../styles/customMuiTheme.js";

const useStyles = makeStyles({
    container: {
        padding: 24,
    },
    title: {
        maxWidth: 1044,
    },
    titleLarge: {
        maxWidth: 1044,
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
    },
    productTitle: {
        fontSize: 36,
        color: theme.palette.primary.main,
    },
    addButton: {
        backgroundColor: theme.palette.quaternary.main,
        transition: "opacity 0.3s ease",

        "&:hover": {
            backgroundColor: theme.palette.quaternary.main,
            opacity: "0.90",
        },
    },
    addIcon: {
        fill: "#FFF",
    },
    tabs: {
        "&:.MuiTabs-scroller": {
            backgroundColor: "#fff",
        },
    },
});

const columns = [
    { title: "ID", field: "idCoop", editable: "never" },
    { title: "Código", field: "codCoop", editable: "never" },
    { title: "Nome", field: "name", editable: "never" },
];

export default function ListCoop() {
    const { data, loading, reload } = useApiRequest(true, "/cooperative");
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isLarge = useMediaQuery(theme.breakpoints.up("md"));
    const classes = useStyles({ isLarge });
    const dispatch = useDispatch();

    const handleDelete = (oldData) => {
        return new Promise(async (resolve, reject) => {
            try {
                await api.delete(`/cooperative/${oldData.codCoop}`);
                await reload();
                resolve();
            } catch (e) {
                dispatch(
                    openSnackbar({
                        message:
                            "Falha ao excluir a cooperativa. Tente novamente",
                        severity: "error",
                    })
                );
                reject();
            }
        });
    };

    return (
        <Grid
            spacing={isMobile ? 6 : 8}
            container
            justify="center"
            alignItems="center"
        >
            <Grid
                item
                xs={12}
                container
                className={isLarge ? classes.titleLarge : classes.title}
            >
                <Grid item xs={6}>
                    <Typography className={classes.productTitle}>
                        Cooperativas
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} container justify="center">
                <Table
                    columns={columns}
                    data={data}
                    title=""
                    style={isMobile ? { width: 310 } : {}}
                    isLoading={loading}
                    delete={handleDelete}
                />
            </Grid>
        </Grid>
    );
}
