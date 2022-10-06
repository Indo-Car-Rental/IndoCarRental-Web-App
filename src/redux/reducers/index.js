import { combineReducers } from "redux";
import authReducer from './authReducer'
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    dataOrder: dataReducer,
    status: authReducer
});

export default rootReducer;