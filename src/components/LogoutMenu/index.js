import React from "react";

import { Menu, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";

function LogoutMenu({ anchorEl, onClose, onClick, ...rest }) {
    return (
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={onClose}
            {...rest}
        >
            <MenuItem onClick={onClick}>Sair</MenuItem>
        </Menu>
    );
}

LogoutMenu.propTypes = {
    anchorEl: PropTypes.object,
    onClose: PropTypes.func,
    onClick: PropTypes.func,
};

export default LogoutMenu;
