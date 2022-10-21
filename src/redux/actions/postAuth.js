import TYPES from "../types";
import axios from "axios";

export const postLoginAdmin = (payload) => (dispatch) => {
    axios({
      method: 'post',
      url: 'https://bootcamp-rent-cars.herokuapp.com/admin/auth/login',
      data: payload
    })
    .then(function (res) {
      localStorage.setItem('admin-token', res.data.access_token);
      dispatch({
        type: TYPES.POST_LOGIN_ADMIN,
        payload: res.data.access_token
      });
    })
    .catch(function (error) {
      dispatch({
        type: TYPES.POST_LOGIN_ADMIN_FAILED,
        payload: error.response.data
      });
    });
};

export const postLogin = (payload) => (dispatch) => {
  axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.getItem(res.data.token);
      dispatch({
        type: TYPES.POST_LOGIN,
        payload: res.data.token,
      });
    })
    .catch((err) => console.log(err));
};