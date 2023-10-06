import { useState, useEffect } from 'react'

import { View, Text, StyleSheet } from 'react-native'

interface IPagination {
	currentPage: number
	pageCount: number
	changePage: (nextPage: number) => void
}

interface IPages {
	prevPage: number | null
	nextPage: number | null
	firstPage: number | null
	lastPage: number | null
}

const Pagination = ({
	currentPage = 0,
	pageCount = 0,
	changePage
}: IPagination) => {

	const [pages, setPages] = useState<IPages>({
		firstPage: 1,
		prevPage: null,
		nextPage: null,
		lastPage: pageCount, 
	})

	useEffect(() => {
		setPages({
			firstPage: currentPage === 1 ? null : 1,
			prevPage: currentPage === 1 || currentPage === 2 ? null : currentPage - 1,
			nextPage: currentPage === pageCount || (currentPage === pageCount - 1) ? null : currentPage + 1,
			lastPage: currentPage === pageCount ? null : pageCount, 
		})
	}, [currentPage, pageCount])

	return (
		<View style={styles.container}>
			<Text onPress={() => changePage(1)}>{pages.firstPage}</Text>
			{pages.prevPage && <Text onPress={() => changePage(currentPage - 1)}>... {pages.prevPage}</Text>}
			<Text style={styles.text}>{currentPage}</Text>
			{pages.nextPage && <Text onPress={() => changePage(currentPage + 1)}> {pages.nextPage} ...</Text>}
			<Text onPress={() => changePage(pageCount)}>{pages.lastPage}</Text>
		</View>
	)
}

export default Pagination

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		gap: 5,
		marginTop: 10,
		marginLeft: 10,
	},
	text: {
		fontWeight: 'bold',
	},
})