import { combineReducers } from 'redux';

export default combineReducers({
  count: countReducer,
});

function countReducer(state = { count: 2}, action) {
    switch(action.type) {
      case 'INCREMENT':
        return { ...state };
      case 'DECREMENT':
        return { ...state };
      default:
        return state;
    }
}
