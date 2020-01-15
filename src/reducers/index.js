import { combineReducers } from 'redux';

export default combineReducers({
  count: countReducer,
});

function countReducer(state = { count: 2}, action) {
    switch(action.type) {
      case 'INCREMENT':
        return { ...state, count: action.payload };
      case 'DECREMENT':
        return { ...state, count: action.payload };
      default:
        return state;
    }
}
