import TYPES from "../types";

const initialState = {
  cars: "",
  small: "",
  medium: "",
  large: "",
  category: "",
  name: "",
};

const carListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_CAR:
      return {
        ...state,
        cars: action.payload,
      };
    case TYPES.FETCH_SMALL_CAR:
      return {
        ...state,
        small: action.payload,
      };
    case TYPES.FETCH_MEDIUM_CAR:
      return {
        ...state,
        medium: action.payload,
      };
    case TYPES.FETCH_LARGE_CAR:
      return {
        ...state,
        large: action.payload,
      };
    case TYPES.CHANGE_CATEGORY_CAR:
      return {
        ...state,
        category: action.payload,
      };
    case TYPES.SEARCH_NAME_CAR:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default carListReducer;
