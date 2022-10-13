import TYPES from "../types"

const initialState = {
    token: "",
    tokenLogin: "",
    tokenLoginAdmin: "",
    loginErrorStatus: ""
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case TYPES.POST_LOGIN:
            return {
                ...state,
                tokenLogin: action.payload
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