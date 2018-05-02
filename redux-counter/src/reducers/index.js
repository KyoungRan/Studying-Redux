// import * as types from '../actions/ActionTypes';

// // 초기 상태를 정의합니다.
// const initialState = {
//   coloe: 'black',
//   number: 0
// };

/*
** 리듀서 함수를 정의합니다. 리듀서는 state 와 action을 파라미터로 받습니다. 
** state 가 undefined 일 때 (스토어가 생성될 때) state 의 기본값을 initialState 로 사용합니다.
** 이 때 주의할 점은 state를 직접 수정하면 안되고,
** 기존 상태 값에 원하는 값을 엎어쓴 새로운 객체를 만들어서 반환해야 합니다.
*/
/*
function counter(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};
*/
/*
** 서브 리듀서들을 하나로 합칩니다.
** combineReducers 를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어집니다. 
** 지금의 경우:
** {
**    numberData: {
**      number: 0
**    },
**    colorData: {
**      color: 'black'  
**    }
** }
** 로 만들어집니다.
*/
import number from './number';
import color from './color';

import { combineReducers } from 'redux';

const reducers = combineReducers({
  numberData: number,
  colorData: color
});

export default reducers;
