import { combineReducers } from 'redux';

import { empInfoRequest } from './emp.reducer';
const rootReducer = combineReducers({
    empInfoRequest,

});
export default rootReducer;