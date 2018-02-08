import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import TestPrescribedMedicineReducer from './TestPrescribedMedicineReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
	testMedicine: TestPrescribedMedicineReducer,
	routing: routerReducer,
	auth: AuthReducer
});