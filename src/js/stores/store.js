import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';

// import defaultPrescribedMedicineData from './testData/defaultPrescribedMedicineData';

import MasterReducer from "../reducers/MasterReducer";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// const defaultState = {
// 	defaultPrescribedMedicineData
// };

const store = createStore(
	MasterReducer,
	{},
	applyMiddleware(middleware, ReduxThunk)
)

export { store, history };