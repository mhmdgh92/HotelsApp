import {
  LOADING_FAILED_HOTEL,
  LOADING_SUCCESS_HOTEL,
  LOADING_TASKS_HOTEL
} from '../actions/types';

const INITIAL_STATE = { loading: false, error: '', tasks: [], msg: ''}

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOADING_TASKS_HOTEL:
      return { ...INITIAL_STATE, loading: true, msg: 'LOADING_TASKS' }
    case LOADING_SUCCESS_HOTEL:
      return { ...INITIAL_STATE, loading: false, tasks: action, msg:'LOADING_SUCCESS'}
    case LOADING_FAILED_HOTEL:
      return { ...INITIAL_STATE, loading: false, error: action.error, msg: 'LOADING_FAILED' }
    default:
      return state;
  }
}
