import axios from 'axios';

export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";


export const dataLoading = () => ({
    type: FETCH_DATA_LOADING
});

export const dataLoadSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

export const dataLoadFailure = error => ({
type: FETCH_DATA_FAILURE,
payload: error
});

export function fetchData() {
return function (dispatch) {
    dispatch(dataLoading());
    return axios
    .get('api.airvisual.com/v2/city?city=San Jose&state=California&country=USA&key=2dd2281e-4a22-4342-8bc1-89c7facc8530')
    .then(res =>{
        console.log('GET sucess', res.data);
        // dispatch(dataLoadSuccess(res.data))
    })
    .catch(err =>{
dispatch(dataLoadFailure(err))
    })
}
};
