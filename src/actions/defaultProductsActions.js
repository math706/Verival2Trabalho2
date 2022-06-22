import { types } from "../reducers/types.js";
import api from "../services/api";
import jwt from "jsonwebtoken";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: types.START_GET_PRODUCTS });
        const token = jwt.decode(window.localStorage.getItem("token"));
        const response = await api.get(`/product/${token.coop}`);
        //console.log(response);
        dispatch({ type: types.FINISH_GET_PRODUCTS, value: response.data });
    } catch (e) {
        dispatch({ type: types.ERROR_GET_PRODUCTS });
        console.log(e);
    }
};
