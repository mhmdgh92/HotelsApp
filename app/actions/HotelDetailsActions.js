import {
  LOADING_FAILED_HOTEL,
  LOADING_SUCCESS_HOTEL,
  LOADING_TASKS_HOTEL
} from './types';

import axios from 'axios';

const handleResponse = (dispatch, data ) => {
  if (data.status) {
    dispatch({ type: LOADING_SUCCESS_HOTEL, tasks: data, msg: 'Done' })
  }else{
    dispatch({ type: LOADING_FAILED_HOTEL, error: 'error' })
  }
}

export const fetchHotelDetailsTasks = (HotelID) => {
  return (dispatch) => {
    dispatch({ type: LOADING_TASKS_HOTEL });
        const url = 'http://5cef16691c2baf00142cc5b6.mockapi.io/hoteldetails/'+HotelID;
        axios.get(url)
         .then(resp => handleResponse(dispatch,resp.data))
         .catch(error => console.log('Error '+error));
  }
}
