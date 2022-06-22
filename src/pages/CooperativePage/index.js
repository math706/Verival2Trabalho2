import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Grid, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Container from "../../components/Container";
import Tabs from "../../components/Tabs";
import AddNewProduct from "./addNewProduct.js";
import RegisterAnualProfit from "./registerAnualProfit.js";

const useStyles = makeStyles({
    container: {
        paddingTop: "32px!important",
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
                        <Tab label="Produto" index={0} key={0} />,
                        <Tab label="Lucro" index={1} key={1} />,
                    ]}
                />
                <Grid item xs={12} className={classes.container}>
                    {value === 0 && (
                        <Container>
                            <AddNewProduct />
                        </Container>
                    )}
                    {value === 1 && (
                        <Container>
                            <RegisterAnualProfit />
                        </Container>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}
