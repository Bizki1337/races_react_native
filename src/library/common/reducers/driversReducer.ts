import {ActionType, getType} from 'typesafe-actions'

import * as actions from '../actions/driversActions'

import { IDriver } from '../interfaces/driversInterfaces'

export type TestState = Readonly<{
	isLoading: boolean
	isError: boolean
	collection: IDriver[] | []
	offset: number
	total: number
	pageCount: number
}>

const initialState: TestState = {
	isLoading: false,
	isError: false,
	collection: [],
	offset: 0,
	total: 0,
	pageCount: 0,
}

const authReducer = (
	state = initialState,
	action: ActionType<typeof actions>
): TestState => {

	switch (action.type) {

		case getType(actions.drivers.request):
			return {
				...state,
				isLoading: true,
			}

		case getType(actions.drivers.success):
			return {
				...state,
				...action.payload,
				isLoading: false,
				isError: false,
			}

		case getType(actions.drivers.failure):
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