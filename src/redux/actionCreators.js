import * as types from "./types";

export function add_number(number) {
	return {
		type: types.ADD_NUMBER,
		payload: { number }
	};
}

export function some_operation(operator) {
	return {
		type: types.SOME_OPERATION,
		payload: { operator }
	};
}

export function get_result(){
	return {
		type: types.GET_RESULT
	};
}

export function add_clear() {
	return {
		type: types.CLEAR
	};
}


