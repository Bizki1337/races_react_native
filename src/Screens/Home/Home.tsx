import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'

import Loader from '../../library/components/Loader/Loader'
import Pagination from '../../library/components/Pagination/Pagination'

import RacersTable from './Frames/DriversTable/DriversTable'


import { ContainerProps } from './HomeContainer'

const Home = ({
	collection,
	isLoading,
	total = 0,
	pageCount,
	getDrivers,
}: ContainerProps) => {

	const [currentPage, setCurrentPage] = useState(1)

	const changePage = (nextPage: number) => {
		getDrivers(nextPage)
		setCurrentPage(nextPage)
	}

	useEffect(() => {getDrivers(currentPage)}, [])

	return (
		<ScrollView>
			<Pagination
				currentPage={currentPage}
				pageCount={pageCount}
				changePage={changePage}
			/>
			<RacersTable isLoading={isLoading} collection={collection} />
		</ScrollView>
	)
}

export default Home