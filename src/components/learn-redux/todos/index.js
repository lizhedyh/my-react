// 由index.js作为对外的公开接口
import * as actions from './actions';
import { reducer } from './reducer';
import { Todos } from './views/todos';

export { actions, reducer, Todos };
