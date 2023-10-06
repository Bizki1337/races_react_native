import { View, TouchableOpacity, Text} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { DataTable } from 'react-native-paper'

import Loader from '../../../../library/components/Loader/Loader'

import { IDriver } from '../../../../library/common/interfaces/driversInterfaces'
import { RootStackParams } from '../../../../library/common/interfaces/routs'

interface IDriversTable {
	collection: IDriver[]
	isLoading: boolean
}

const DriversTable = ({
	collection,
	isLoading,
}: IDriversTable) => {

	const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParams>>()

	if (isLoading) return <Loader />

	return (
		<DataTable>
			<DataTable.Header>
				<DataTable.Title>Имя</DataTable.Title>
				<DataTable.Title numeric>Фамилия</DataTable.Title>
				<DataTable.Title numeric>ID гонщика</DataTable.Title>
				<DataTable.Title numeric>Гонки</DataTable.Title>
			</DataTable.Header>
			{!!collection.length && (
				<View>
					{collection.map((item: IDriver, i: number) => (
						<DataTable.Row key={i}>
							<DataTable.Cell>
							<TouchableOpacity
								onPress={() => navigate('Driver', {driverID: item.driverId})}
							>
								<Text style={{fontWeight: 'bold'}}>{item.givenName}</Text>
							</TouchableOpacity>
							</DataTable.Cell>
							<DataTable.Cell numeric>{item.familyName}</DataTable.Cell>
							<DataTable.Cell numeric>{item.driverId}</DataTable.Cell>
							<DataTable.Cell numeric>
								<Text
									style={{fontWeight: 'bold'}}
									onPress={() => navigate('Races', {driverID: item.driverId})}
								>
									гонки
								</Text>
							</DataTable.Cell>
						</DataTable.Row>
					))}
				</View>
			)}
		</DataTable>
	)
}

export default DriversTable