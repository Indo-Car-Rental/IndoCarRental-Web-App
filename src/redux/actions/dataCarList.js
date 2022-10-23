import TYPES from "../types";
import axios from "axios";

export const testFetchCar = (payload) => (dispatch, getState) => {
  const { carList } = getState();
  const { category, name } = carList;
  const token = localStorage.getItem("admin-token");
  axios
    .get(
      `https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=${category}&name=${name}`,
      {
        headers: {
          access_token: token,
        },
      }
    )
    .then((res) => {
      // console.log("cek respon redux", res.data.cars);
      dispatch({
        type: TYPES.FETCH_CAR,
        payload: res.data.cars,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const FetchCarSmall = (payload) => (dispatch) => {
  const token = localStorage.getItem("admin-token");
  axios
    .get(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=small",
      {
        headers: {
          access_token: token,
        },
      }
    )
    .then((res) => {
      // console.log("cek respon redux", res.data.cars);
      dispatch({
        type: TYPES.FETCH_SMALL_CAR,
        payload: res.data.cars,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const FetchCarMedium = (payload) => (dispatch) => {
  const token = localStorage.getItem("admin-token");
  axios
    .get(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=medium",
      {
        headers: {
          access_token: token,
        },
      }
    )
    .then((res) => {
      console.log("cek respon redux", res.data.cars);
      dispatch({
        type: TYPES.FETCH_MEDIUM_CAR,
        payload: res.data.cars,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const FetchCarLarge = (payload) => (dispatch) => {
  const token = localStorage.getItem("admin-token");
  axios
    .get(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=large",
      {
        headers: {
          access_token: token,
        },
      }
    )
    .then((res) => {
      console.log("cek respon redux", res.data.cars);
      dispatch({
        type: TYPES.FETCH_LARGE_CAR,
        payload: res.data.cars,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
