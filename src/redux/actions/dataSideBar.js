import TYPES from "../types";

export const dataSideBar = (payload) => (dispatch) => {
    dispatch({
        type: TYPES.DATA_SIDEBAR,
        payload: payload
    });
};