import { combineReducers } from "redux";
import authReducer from './authReducer'

const rootReducer = combineReducers({
    status: authReducer
});

export default rootReducer;