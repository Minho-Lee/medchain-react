import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import TestPrescribedMedicineReducer from './TestPrescribedMedicineReducer';
import AuthReducer from './AuthReducer';
import ActivePatientReducer from './ActivePatientReducer';

export default combineReducers({
	testMedicine: TestPrescribedMedicineReducer,
	routing: routerReducer,
	auth: AuthReducer,
	activePat: ActivePatientReducer
});