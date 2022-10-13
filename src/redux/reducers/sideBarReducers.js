import TYPES from "../types"

const initialState = {
    hideSideBar: false,
}

const sideBarReducer = (state=initialState, action) => {
    switch(action.type) {
        case TYPES.DATA_SIDEBAR:
            return {
                ...state,
                hideSideBar: action.payload
            }
        default:
            return state;
    }

    
}

export default sideBarReducer;