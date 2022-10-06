import axios from "axios";
import TYPES from "../types";

export const getData = () => (dispatch) => {
  axios
    .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
    .then((res) => {
      console.log(res, 'this is respon in getData')
      dispatch({
        type: TYPES.FETCH_DATA,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
