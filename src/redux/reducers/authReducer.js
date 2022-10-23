import TYPES from "../types"

const customerToken = localStorage.getItem("access_token");
const tokenLogin = customerToken ? customerToken : "";

const initialState = {
    token: "",
    tokenLogin: tokenLogin,
    tokenLoginAdmin: "",
    loginErrorStatus: ""
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case TYPES.POST_LOGIN:
            return {
                ...state,
                tokenLogin: action.payload,
                isLoggin: true
            }
        
        case TYPES.POST_LOGIN_FAILED:
            return {
                ...state,
                tokenLogin: null,
                isLoggin: false,
                loginErrorStatus: action.payload,
            }
            
        case TYPES.POST_LOGIN_ADMIN:
            return {
                ...state,
                tokenLoginAdmin: action.payload
            }
        
        case TYPES.POST_LOGIN_ADMIN_FAILED:
            return {
                ...state,
                loginErrorStatus: action.payload
            }

        default:
            return state;
    }

    
}

export default authReducer