import TYPES from "../types"

const initialState = {
    cars: "",
    small: "",
    medium: "",
    large: ""
}

const carListReducer = (state=initialState, action) => {
    switch(action.type) {
        case TYPES.FETCH_CAR:
            return {
                ...state,
                cars: action.payload
            }
        default:
            return state;
    }
    
}

export default carListReducer;