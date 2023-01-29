// 存储应用状态，接受Disptcher发出的动作，决定是否更新状态
import { EventEmitter }  from 'events';
import AppDispatcher from '../appDispatcher';

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 20,
}


const conuterStore = Object.assign({}, EventEmitter.prototype, {
    /**
     * 读取当前计数值
     * @returns {object} counterValues
     */
    getCounterValue: () => {
        return counterValues;
    },
    /**
     * 广播状态更新
     */
    emitChange: ()=> {
        this.emit(CHANGE_EVENT);
    },
    /**
     * 添加监听函数
     * @param {func} callback 
     */
    addChangeListener: (callback) => {
        this.on(CHANGE_EVENT,callback);
    },
    /**
     * 移除监听函数
     * @param {func} callback 
     */
    removeChangeListener: (callback) => {
        this.removeListener(CHANGE_EVENT,callback);
    },
});

conuterStore.dispatcherToken = AppDispatcher.register((action) => {
    if (action.ActionTypes === 'INCREMENT') {
        counterValues[action.counterCaption]++;
        countterStore.emitChange();
    } else if (action.ActionTypes === 'DECREMENT') {
        counterValues[action.counterCaption]--;
        countterStore.emitChange();
    }
});