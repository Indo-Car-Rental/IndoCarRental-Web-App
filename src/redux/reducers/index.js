import { combineReducers } from "redux";
import authReducer from "./authReducer";
import carListReducer from "./carListReducer";
import dataReducer from "./dataReducer";
import paymentReducer from "./paymentReducers";
import sideBarReducer from "./sideBarReducers";

const rootReducer = combineReducers({
  dataOrder: dataReducer,
  status: authReducer,
  sideBar: sideBarReducer,
  payment: paymentReducer,
  carList: carListReducer,
});

export default rootReducer;
