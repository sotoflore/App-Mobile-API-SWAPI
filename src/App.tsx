import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PeopleScreen from './presentation/screens/PeopleScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FilmsScreen from './presentation/screens/FilmsScreen';
import PlanetScreen from './presentation/screens/PlanetScreen';
import { ThemeProvider} from './presentation/context/ThemeContext';

import HeaderView from './presentation/components/molecules/HeaderView';

const Tab = createBottomTabNavigator();

const App = () => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            header: () => <HeaderView title={route.name} />,
                        })}
                    >
                        <Tab.Screen
                            options={{
                                tabBarIcon: () => (<Icon name="people-outline" size={30} color="purple" />)
                            }}
                            name="Personajes"
                            component={PeopleScreen}
                        />
                        <Tab.Screen
                            options={{
                                tabBarIcon: () => (<Icon name="film-outline" size={30} color="purple" />)
                            }}
                            name="Películas"
                            component={FilmsScreen}
                        />
                        <Tab.Screen
                            options={{
                                tabBarIcon: () => (<Icon name="planet-outline" size={30} color="purple" />)
                            }}
                            name="Planetas"
                            component={PlanetScreen}
                        />

                    </Tab.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App