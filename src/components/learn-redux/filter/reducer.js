import { SET_FILTER } from './actionTypes';
import { FilterTypes } from '../constant';


export const reducer = (state = FilterTypes.ALL, action) => {
  switch (action.type) {
  case SET_FILTER:
    return action.filter; // 把store上的filter值替换成action中的filter值
  default:
    return state;
  }
};
