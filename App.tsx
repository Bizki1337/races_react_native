import React from 'react'
import {Provider} from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import configureStore from './src/core/store/configureStore'

import HomeContainer from './src/Screens/Home/HomeContainer'
import DriverContainer from './src/Screens/Driver/DriverContainer'
import RacesContainer from './src/Screens/Races/RacesContainer'

import { RootStackParams } from './src/library/common/interfaces/routs'

export const store = configureStore()

const RootStack = createNativeStackNavigator<RootStackParams>()

function App(): JSX.Element {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<RootStack.Navigator initialRouteName='Home'>
					<RootStack.Screen
						name='Home'
						component={HomeContainer}
						options={{ title: 'Список спортсменов' }}
					/>
					<RootStack.Screen
						name='Driver'
						component={DriverContainer}
						options={{ title: 'Спортсмен' }}
					/>
					<RootStack.Screen
						name='Races'
						component={RacesContainer}
						options={{ title: 'Список гонок' }}
					/>
				</RootStack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App
