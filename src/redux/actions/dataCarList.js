import TYPES from "../types";
import axios from "axios";

export const testFetchCar = (payload) => (dispatch) => {
  const token = localStorage.getItem("admin-token");
  axios
    .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car", {
      headers: {
        access_token: token,
      },
    })
    .then((res) => {
      console.log("cek respon redux", res.data.cars);
      dispatch({
        type: TYPES.FETCH_CAR,
        payload: res.data.cars,
      });
    })
    .catch((err) => {
        console.log(err)
    })
}
