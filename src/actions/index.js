export const increment = newCount => (dispatch, getState) => {
    dispatch({ type: 'INCREMENT', payload: newCount });
}

export const decrement = newCount => (dispatch, getState) => {
    if (newCount < 0) return dispatch({ type: 'DECREMENT', payload: 0 });
    dispatch({ type: 'DECREMENT', payload: newCount });
}