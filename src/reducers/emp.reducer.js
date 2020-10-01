import { empConstants } from '../constants';

export function empInfoRequest(state = {}, action) {
	let tempArray = [];
	if(state.employeesInfo)
	tempArray = state.employeesInfo
	if(action.user)
	tempArray.push(action.user.user)

	switch (action.type) {
		case empConstants.EMPLOYEE_INFO_REQUEST:
			return { ...state,
				employeesInfo: tempArray, };
		
		default:
			return state;
	}
}