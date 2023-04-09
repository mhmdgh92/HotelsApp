import {combineReducers} from 'redux';

import HomeReducer from './HomeReducer';
import HotelDetailsReducer from './HotelDetailsReducer';

export default combineReducers({
  HomeRed: HomeReducer,
  HotelDetailsRed: HotelDetailsReducer
});
