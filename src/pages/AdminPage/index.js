import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Grid, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Container from "../../components/Container";
import Tabs from "../../components/Tabs";
import ListCoop from "./listCoop.js";
import RegisterAdmin from "./registerAdmin.js";
import RegisterCoop from "./registerCoop.js";

const useStyles = makeStyles({
    container: {
        paddingTop: "32px!important",
    },
    registerCoop: {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
    },
});

export default function CooperativePage() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOnClick = () => {
        localStorage.clear();
        history.push("/");
        setAnchorEl(null);
    };

    return (
        <div style={{ padding: 8 }}>
            <Grid container spacing={2}>
                <Tabs
                    value={value}
                    onChange={(event) => {
                        setValue(event);
                    }}
                    handleOnClick={handleOnClick}
                    handleClose={handleClose}
                    handleLogoClick={handleClick}
                    anchorEl={anchorEl}
                    tabsContent={[
                        <Tab label="Cadastro Coop" index={0} key={0} />,
                        <Tab label="Cadastro Admin" index={1} key={1} />,
                        <Tab label="Cooperativas" index={2} key={2} />,
                    ]}
                />
                <Grid item xs={12} className={classes.container}>
                    {value === 0 && (
                        <Container className={classes.registerCoop}>
                            <RegisterCoop />
                        </Container>
                    )}
                    {value === 1 && (
                        <Container className={classes.registerCoop}>
                            <RegisterAdmin />
                        </Container>
                    )}
                    {value === 2 && (
                        <Container>
                            <ListCoop />
                        </Container>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}
