import {ActionType, getType} from 'typesafe-actions'

import * as actions from '../actions/driverDetailsActions'

import { IDriver } from '../interfaces/driversInterfaces'

export type TestState = Readonly<{
	isLoading: boolean
	isError: boolean
	details: IDriver | null
}>

const initialState: TestState = {
	isLoading: false,
	isError: false,
	details: null,
}

const authReducer = (
	state = initialState,
	action: ActionType<typeof actions>
): TestState => {

	switch (action.type) {

		case getType(actions.driverDetail.request):
			return {
				...state,
				isLoading: true,
			}

		case getType(actions.driverDetail.success):
			return {
				...state,
				details: action.payload,
				isLoading: false,
				isError: false,
			}

		case getType(actions.driverDetail.failure):
			return {
				...state,
				isLoading: false,
				isError: true,
			}

		default:
			return state
	}
}

export default authReducer