import TYPES from "../types"

const initialState = {
    paymentData: "",
    paymentUpload: "",
    paymentOrder: "",
    paymentSlip: ""
}

const paymentReducer = (state=initialState, action) => {
    switch(action.type) {
        case TYPES.DATA_PAYMENT:
            return {
                ...state,
                paymentData: action.payload
            }
        
        case TYPES.DATA_PAYMENT_UPLOAD:
            return {
                ...state,
                paymentUpload: action.payload
            }
        
        case TYPES.DATA_ORDER_PAYMENT:
            return {
                ...state,
                paymentOrder: action.payload
            }
        
        case TYPES.DATA_BUKTI_PEMBAYARAN:
            return {
                ...state,
                paymentSlip: action.payload
            }
    

        default:
            return state;
    }

    
}

export default paymentReducer;