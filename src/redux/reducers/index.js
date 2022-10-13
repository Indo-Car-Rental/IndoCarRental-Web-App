import { combineReducers } from "redux";
import authReducer from './authReducer'
import sideBarReducer from "./sideBarReducers";

const rootReducer = combineReducers({
    status: authReducer,
    sideBar: sideBarReducer
});

export default rootReducer;