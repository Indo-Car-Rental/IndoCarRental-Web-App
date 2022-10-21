import { combineReducers } from "redux";
import authReducer from "./authReducer";
import carListReducer from "./carListReducer";
import dataReducer from "./dataReducer";
import sideBarReducer from "./sideBarReducers";

const rootReducer = combineReducers({
  dataOrder: dataReducer,
  status: authReducer,
  sideBar: sideBarReducer,
  carList: carListReducer
});

export default rootReducer;
