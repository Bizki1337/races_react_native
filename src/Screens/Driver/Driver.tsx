import { useEffect } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'

import { View, Text, StyleSheet } from 'react-native'

import { ContainerProps } from './DriverContainer'

import { RootStackParams } from '../../library/common/interfaces/routs'

const Driver = ({
	isLoading,
	details,
	getDriverDetails,
}: ContainerProps) => {

	const route = useRoute<RouteProp<RootStackParams, 'Driver'>>()
	const { driverID } = route.params

	useEffect(() => {if (driverID) getDriverDetails(driverID)}, [driverID])

	if (!details) return <View><Text>Данные отсутсвуют</Text></View>

	const {
		dateOfBirth,
		familyName, givenName,
		nationality,
	} = details

	return (
		<View style={styles.container}>
			<Text><Text style={styles.title}>Имя: </Text>{givenName}</Text>
			<Text><Text style={styles.title}>Фамилия: </Text>{familyName}</Text>
			<Text><Text style={styles.title}>Национальность: </Text>{nationality}</Text>
			<Text><Text style={styles.title}>Дата рождения: </Text>{dateOfBirth}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		marginTop: 10,
		marginLeft: 10,
	},
	title: {
		fontWeight: 'bold',
	},
})

export default Driver