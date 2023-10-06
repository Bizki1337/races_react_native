import {ActionType, getType} from 'typesafe-actions'

import * as actions from '../actions/driverRacesActions'

import { IRace } from '../interfaces/racesInterfaces'

export type TestState = Readonly<{
	isLoading: boolean
	isError: boolean
	collection: IRace[] | []
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

		case getType(actions.driverRaces.request):
			return {
				...state,
				isLoading: true,
			}

        case getType(actions.driverRaces.success):
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isError: false,
            }

		case getType(actions.driverRaces.failure):
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