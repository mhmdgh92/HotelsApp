import {
  LOADING_FAILED,
  LOADING_SUCCESS,
  LOADING_TASKS
} from './types';

import axios from 'axios';

const handleResponse = (dispatch, data ) => {
  console.log('data.status:'+data.status);
  if (data.status) {
    dispatch({ type: LOADING_SUCCESS, tasks: data, msg: 'Done' })
  }else{
    dispatch({ type: LOADING_FAILED, error: 'error' })
  }
}

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_TASKS });
        const url = 'https://testapi.io/api/mohammedghabyen/defaulthotels';
        axios.get(url)
         .then(resp => handleResponse(dispatch,resp.data))
         .catch(error => console.log('Error '+error));
  }
}
