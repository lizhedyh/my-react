//reducer纯函数根据状态和动作返回新的状态，不产生其他副作用
import * as ActionTypes from './actionTypes';

export default (state, action) => {
    const { counterCaption } = action;
    switch(action.type) {
        case ActionTypes.INCREMENT: 
            return { ...state, [counterCaption]: state[counterCaption] + 1};

        case ActionTypes.DECREMENT:
            return { ...state, [counterCaption]: state[counterCaption] - 1};

        default:
            return state;
    }
};