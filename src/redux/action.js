
export function ADD_NUMBER(state, payload) {
    const { number } = payload;
    const nextState = { ...state, tablo: state.tablo + number};
    return nextState;
}

export function SELECT_OPERATION(state, payload) {
    const { operator } = payload;
    const nextState = { ...state, tablo: '', operand1: +state.tablo, operator};
    console.log(state.operand1)
    return nextState;
}

export function GET_RESULT(state, payload) {

    const { operator } = state

    switch(operator) {
        case '+' : {
            const result = +state.operand1 + +state.tablo;
            console.log(result)
            const nextState = { ...state, result};
            return nextState;
        }

        case '-' : {
            const result = +state.operand1 - +state.tablo;
            console.log(result)
            const nextState = { ...state, result};
            return nextState;
        }

        case '*' : {
            const result = +state.operand1 * +state.tablo;
            const nextState = { ...state, result};
            return nextState;
        }

        case '/' : {
            const result = +state.operand1 / +state.tablo ;
            const nextState = { ...state, result};
            return nextState;
        }

        default: return state;
    }
}

export function CLEAR(state, payload) {
    const nextState ={ ...state, tablo: '', operand1: '', operator: '', result: ''};
    return nextState;
}