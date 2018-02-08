import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory';

import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import defaultPrescribedMedicineData from './testData/defaultPrescribedMedicineData';

import MasterReducer from "../reducers/MasterReducer";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const defaultState = {
	defaultPrescribedMedicineData
};

const store = createStore(
	MasterReducer,
	{},
	applyMiddleware(middleware)
)

// export const history = syncHistoryWithStore(browserHistory, store);

export { store, history };