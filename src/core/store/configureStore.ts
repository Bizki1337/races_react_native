import createSagaMiddleware from 'redux-saga'
import {legacy_createStore as createStore, applyMiddleware, AnyAction} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { StateType } from 'typesafe-actions'

import createCoreReducer from '../coreReducer'
import coreSaga from '../coreSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = composeWithDevTools(
	applyMiddleware(sagaMiddleware),
)

const coreReducer = createCoreReducer()

type coreReducer = ReturnType<typeof coreReducer>

const rootReducer = (
	state: coreReducer | undefined,
	action: any
) => {
	return coreReducer(state, action)
}

export type RootState = StateType<typeof coreReducer>

export default function configureStore(initialState = {}) {
	const store = createStore(rootReducer, initialState, middlewares)
	sagaMiddleware.run(coreSaga)

	return store
}