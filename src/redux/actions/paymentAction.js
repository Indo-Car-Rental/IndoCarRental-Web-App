import TYPES from "../types";
import axios from "axios";

export const datePayment = (payload) => (dispatch) => {
    dispatch({
        type: TYPES.DATA_PAYMENT,
        payload: payload
    });
};

export const UploadPayment = (payload) => (dispatch) => {
    axios({
        method: 'post',
        url: 'https://bootcamp-rent-cars.herokuapp.com/customer/order',
        data: {
            start_rent_at: payload.api_dateFrom,
            finish_rent_at: payload.api_dateTo,
            car_id: payload.id_car
        },
        headers: {
            access_token : localStorage.getItem("access_token")
        }
      })
      .then(function (res) {
        dispatch({
            type: TYPES.DATA_PAYMENT_UPLOAD,
            payload: res.data
        });
        dispatch({
            type: TYPES.DATA_ORDER_PAYMENT,
            payload: payload
        });
      })
      .catch(function (error) {
        console.log(error)
      });
};

export const getDataPaymentOrder = (payload) => (dispatch) => {
    axios({
        method: 'get',
        url: `https://bootcamp-rent-cars.herokuapp.com/customer/order/${payload.id_order}`,
        headers: {
            access_token : localStorage.getItem("access_token")
        }
      })
      .then(function (res) {
        dispatch({
            type: TYPES.DATA_ORDER_PAYMENT,
            payload: res.data
        });
      })
      .catch(function (error) {
        console.log(error)
      });
};

export const uploadBuktiPembayaran = (payload, id_order) => (dispatch) => {
    axios({
        method: 'put',
        url: `https://bootcamp-rent-cars.herokuapp.com/customer/order/${id_order}/slip`,
        data: payload.formData,
        headers: {
            access_token : localStorage.getItem("access_token")
        }
      })
      .then(function (res) {
        dispatch({
            type: TYPES.DATA_BUKTI_PEMBAYARAN,
            payload: res.data
        });
      })
      .catch(function (error) {
        console.log(error)
      });
};