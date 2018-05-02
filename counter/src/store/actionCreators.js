// store를 불러오고, 
// 또 각 모듈들에게 선언했던 액션 생성함수들을 불러와서 
// store의 dispatch와 미리 바인딩 작업을 해줍니다. 
import { bindActionCreators } from 'redux';
import * as counterActions from './modules/counter';
import * as todoActions from './modules/todo';

import store from './index';

const { dispatch } = store;

export const CounterActions = bindActionCreators(counterActions, dispatch);
export const TodoActions = bindActionCreators(todoActions, dispatch);
