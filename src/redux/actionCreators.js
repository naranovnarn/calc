import * as types from "./types";

export function add_number(number) {
	return {
		type: types.ADD_NUMBER,
		payload: { number }
	};
}

export function select_operation(operator) {
	return {
		type: types.SELECT_OPERATION,
		payload: { operator }
	};
}

export function get_result(){
	return {
		type: types.GET_RESULT
	};
}

export function clear() {
	return {
		type: types.CLEAR
	};
}


