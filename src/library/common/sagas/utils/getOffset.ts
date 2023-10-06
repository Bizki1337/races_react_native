import { DEFAULT_LIMIT } from '../../../constants'

export const getOffset = (page: number) => {
	if (page > 1) return page * DEFAULT_LIMIT - DEFAULT_LIMIT
	return 0
}