import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";
import sideBarReducer from "./sideBarReducers";
import carReducer from "./carReducer";

const rootReducer = combineReducers({
  dataOrder: dataReducer,
  status: authReducer,
  sideBar: sideBarReducer,
});

export default rootReducer;
