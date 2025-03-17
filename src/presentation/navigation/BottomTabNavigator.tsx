import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HeaderView from "../components/molecules/HeaderView";
import Icon from 'react-native-vector-icons/Ionicons';
import PeopleScreen from "../screens/people/PeopleScreen";
import FilmsScreen from "../screens/film/FilmsScreen";
import PlanetScreen from "../screens/planet/PlanetScreen";
import { useThemeContext } from "../context/ThemeContext";
import { Colors } from "../../domain/constants/colors.style";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    const { theme } = useThemeContext();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => <HeaderView title={route.name} />,
                tabBarStyle: {
                    backgroundColor: theme === "dark" ? Colors.dark.background : Colors.light.colorCard,
                },
                tabBarActiveTintColor: theme === "dark" ? Colors.dark.secondary : Colors.light.purple,
                tabBarInactiveTintColor: theme === "dark" ? Colors.dark.primary: Colors.light.text,
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
    )
}

export default BottomTabNavigator