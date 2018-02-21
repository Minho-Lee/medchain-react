import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AuthReducer from './AuthReducer';
import ActivePatientReducer from './ActivePatientReducer';

export default combineReducers({
	routing: routerReducer,
	auth: AuthReducer,
	activePat: ActivePatientReducer,
});