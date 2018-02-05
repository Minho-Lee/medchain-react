import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import defaultPrescribedMedicineData from './testData/defaultPrescribedMedicineData';

import MasterReducer from "../reducers/MasterReducer";

const defaultState = {
	defaultPrescribedMedicineData
};

const store = createStore(MasterReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;