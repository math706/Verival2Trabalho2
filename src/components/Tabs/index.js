import React from "react";

import { Grid, Tabs as MuiTabs } from "@material-ui/core";
import PropTypes from "prop-types";

import { ReactComponent as SmallLogo } from "../../assets/smallLogo.svg";
import LogoutMenu from "../../components/LogoutMenu";

const Tabs = ({
    tabsContent,
    onChange,
    value,
    handleLogoClick,
    handleOnClick,
    anchorEl,
    handleClose,
}) => {
    const handleChange = (event, newValue) => {
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <>
            <Grid
                item
                xs={12}
                style={{ backgroundColor: "#FFFFFF", paddingBottom: 0 }}
            >
                <MuiTabs
                    value={value}
                    onChange={(event, newValue) =>
                        handleChange(event, newValue)
                    }
                >
                    {/* eslint-disable-next-line react/prop-types */}
                    {tabsContent.map((tab) => {
                        return tab;
                    })}
                    <SmallLogo
                        onClick={handleLogoClick}
                        aria-controls="menu"
                        aria-haspopup="true"
                        style={{
                            marginLeft: "auto",
                            marginTop: 6,
                            cursor: "pointer",
                        }}
                    />
                    <LogoutMenu
                        id="menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        keepMounted
                        onClose={handleClose}
                        onClick={handleOnClick}
                    />
                </MuiTabs>
            </Grid>
        </>
    );
};

Tabs.propTypes = {
    tabsContent: PropTypes.array,
    onChange: PropTypes.func,
    value: PropTypes.number,
    handleLogoClick: PropTypes.func,
    handleOnClick: PropTypes.func,
    handleClose: PropTypes.func,
    anchorEl: PropTypes.any,
};

export default Tabs;
