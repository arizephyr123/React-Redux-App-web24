import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions";

export const initialState = {
  weatherData: {},
  isFetching: false,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      console.log("reducers FETCH_DATA_LOADING");
      return { ...state, isFetching: true };
    case FETCH_DATA_SUCCESS:
      console.log("reducers FETCH_DATA_SUCCESS", action.payload);
      return {
        weatherData: action.payload,
        isFetching: false
      };
    case FETCH_DATA_FAILURE:
      console.log("reducers FETCH_DATA_FAILURE", action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default reducer;
