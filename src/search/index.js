import * as types from './types';

const initialState = "";
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case types.UPDATE_SEARCH: {
            const term = action.payload.value;
            return term;
        }
        default: return state;
    }
}

export default reducer;