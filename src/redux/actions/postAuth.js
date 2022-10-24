import TYPES from "../types";
import axios from "axios";

export const postLoginAdmin = (payload) => (dispatch) => {
  axios({
    method: "post",
    url: "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
    data: payload,
  })
    .then(function (res) {
      localStorage.setItem("admin-token", res.data.access_token);
      dispatch({
        type: TYPES.POST_LOGIN_ADMIN,
        payload: res.data.access_token,
      });
    })
    .catch(function (error) {
      dispatch({
        type: TYPES.POST_LOGIN_ADMIN_FAILED,
        payload: error.response.data,
      });
    });
};

export const postLogin = (payload) => (dispatch) => {
  axios
    .post(
      "https://bootcamp-rent-cars.herokuapp.com/customer/auth/login",
      payload
    )
    .then((res) => {
      console.log(res, "res");
      localStorage.setItem("access_token", res.data.access_token);
      // localStorage.getItem(res.data.access_token);
      dispatch({
        type: TYPES.POST_LOGIN,
        payload: res.data.access_token,
      });
    })
    .catch((error) => {
      const message = error.response.data
      dispatch({
        type: TYPES.POST_LOGIN_FAILED,
        payload: message
      })
      console.log(error.response.data);
    });
};

export const customerLogout = () => (dispatch) => {
  dispatch({
    type: TYPES.CUSTOMER_LOGOUT
  });
};