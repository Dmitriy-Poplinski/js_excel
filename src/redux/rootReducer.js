
export function rootReducer(state, action) {
    /* eslint-disable indent */
    let prevState;
    switch (action.type) {
        case 'TABLE_RESIZE':
            prevState = state.colState || {};
            prevState[action.data.id] = action.data.value;
            return {...state, colState: prevState};
        default:
            return state;
    };
    return state;
};
