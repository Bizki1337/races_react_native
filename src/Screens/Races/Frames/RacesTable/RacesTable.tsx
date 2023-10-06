import { View} from 'react-native'

import { DataTable } from 'react-native-paper'

import Loader from '../../../../library/components/Loader/Loader'

import { IRace } from '../../../../library/common/interfaces/racesInterfaces'

interface IRacesTable {
	collection: IRace[],
    isLoading: boolean,
}

const RacesTable = ({
	collection,
    isLoading,
}: IRacesTable) => {

    if (isLoading) return <Loader />

	return (
		<DataTable>
			<DataTable.Header>
				<DataTable.Title numeric>Гонка</DataTable.Title>
				<DataTable.Title numeric>Сезон</DataTable.Title>
				<DataTable.Title numeric>Раунд</DataTable.Title>
			</DataTable.Header>
			{!!collection.length && (
				<View>
					{collection.map((item: IRace, i: number) => (
                        <DataTable.Row key={i}>
							<DataTable.Cell numeric>{item.raceName}</DataTable.Cell>
						    <DataTable.Cell numeric>{item.season}</DataTable.Cell>
							<DataTable.Cell numeric>{item.round}</DataTable.Cell>
						</DataTable.Row>
					))}
				</View>
			)}
		</DataTable>
	)
}

export default RacesTable