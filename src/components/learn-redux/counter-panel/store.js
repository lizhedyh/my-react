import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

const initialValue = {
  'First': 0,
  'Second': 10,
  'Third': 20,
};

const store = createStore(reducer, initialValue);

export default store;
