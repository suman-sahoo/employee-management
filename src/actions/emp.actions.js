import { empConstants } from '../constants';
import { toast } from 'react-toastify';

export const empActions = {
	empInfoRequest,
};

function empInfoRequest(user) {

	return dispatch => {
		dispatch(request({ user }));
		toast.info("Recordes submited successfully", {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 5000,
		});
		
	};

	function request(user) {
		return { type: empConstants.EMPLOYEE_INFO_REQUEST, user };
	}
	
}
