import { useEffect, useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'

import { RootStackParams } from '../../library/common/interfaces/routs'

import Pagination from '../../library/components/Pagination/Pagination'
import Loader from '../../library/components/Loader/Loader'

import RacesTable from './Frames/RacesTable/RacesTable'

import { ContainerProps } from './RacesContainer'

const Races = ({
	collection,
	isLoading,
	total = 0,
	pageCount,
	getRaces,
}: ContainerProps) => {

	const [currentPage, setCurrentPage] = useState(1)

	const route = useRoute<RouteProp<RootStackParams, 'Driver'>>()
	const { driverID } = route.params

	useEffect(() => {if (driverID) getRaces({driverID, page: 1})}, [])

	const changePage = (nextPage: number) => {
		getRaces({driverID, page: nextPage})
		setCurrentPage(nextPage)
	}

	return (
		<ScrollView>
			<Pagination
				currentPage={currentPage}
				pageCount={pageCount}
				changePage={changePage}
			/>
			<RacesTable isLoading={isLoading} collection={collection} />
		</ScrollView>
	)
}

export default Races