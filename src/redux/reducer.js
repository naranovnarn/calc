import * as types from "./types";
import { ADD_NUMBER, SELECT_OPERATION, GET_RESULT, CLEAR } from "./action";

const initState = {
    tablo: '',
    operand1: '',
    operator: '',
    result: ''
};

const reducer = (state = initState, action) => {
    const { type, payload} = action;
    switch (type) {
        case types.ADD_NUMBER: return ADD_NUMBER(state, payload);
        case types.SELECT_OPERATION: return SELECT_OPERATION(state, payload);
        case types.GET_RESULT: return GET_RESULT(state, payload);
        case types.CLEAR: return CLEAR(state, payload);

        default: return state;
    }
}

export default reducer;