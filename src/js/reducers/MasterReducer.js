import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import testPrescribedMedicineReducer from '../reducers/testPrescribedMedicineReducer';

const masterReducer = combineReducers({
	testPrescribedMedicineReducer,
	routing: routerReducer
});

export default masterReducer;