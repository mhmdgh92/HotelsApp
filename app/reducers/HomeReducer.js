import {
  LOADING_FAILED,
  LOADING_SUCCESS,
  LOADING_TASKS
} from '../actions/types';

const INITIAL_STATE = { loading: false, error: '', tasks: [], msg: ''}

export default(state = INITIAL_STATE, action) => {
  console.log('actiontype:'+action.type);
  switch(action.type) {
    case LOADING_TASKS:
      return { ...INITIAL_STATE, loading: true, msg: 'LOADING_TASKS' }
    case LOADING_SUCCESS:
      return { ...INITIAL_STATE, loading: false, tasks: action, msg:'LOADING_SUCCESS'}
    case LOADING_FAILED:
      return { ...INITIAL_STATE, loading: false, error: action.error, msg: 'LOADING_FAILED' }
    default:
      return state;
  }
}
