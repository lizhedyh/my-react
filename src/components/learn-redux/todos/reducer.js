import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

export const reducer = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, {
      id: action.id,
      text: action.text,
      completed: false,
    }];
  case TOGGLE_TODO:
    // 改变completed状态
    return state.map(item => {
      if (item.id === action.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
  case REMOVE_TODO:
    // 删除被选中的元素
    return state.filter(item => item.id !== action.id);
  default:
    return state;
  }
};
