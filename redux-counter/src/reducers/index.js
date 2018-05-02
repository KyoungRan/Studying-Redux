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
import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다. 
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
}

// 리듀서 함수를 정의합니다. 
function counter(state = initialState, action) {
  // 레퍼런스 생성
  const { counters } = state;

  switch(action.type) {
    // 카운터를 새로 추가합니다. 
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      };
    // slice 를 이용하여 맨 마지막 카운터를 제외시킵니다.
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length -1)
      };
    // action.index 번째 카운터의 number 에 1을 더합니다.
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number + 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    // actions.index 번째 카운터의 number 에 1을 뺍니다. 
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    // action.index 번째 카운터의 색상을 변경합니다.
    case types.SET_COLOR:
    return {
      counters: [
        ...counters.slice(0, action.index),
        {
          ...counters[action.index],
          color: action.color
        },
        ...counters.slice(action.index + 1, counters.length)
      ]
    };
    default:
      return state;
  }
};

export default counter;