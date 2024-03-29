// 定义action构造函数,能够产生并派发action对象的函数
import * as ActionTypes from './actionTypes';

export const increment = counterCaption => ({
  type: ActionTypes.INCREMENT,
  counterCaption,
});

export const decrement = counterCaption => ({
  type: ActionTypes.DECREMENT,
  counterCaption,
});
