import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import PeopleDetailScreen from "../screens/people/PeopleDetailScreen";
import { ResultPeople } from "../../domain/dto/peoples/PeopleSpanishDTO";


export type RootStackParamList = {
    Tabs: undefined; 
    PeopleDetail: { people: ResultPeople }; 
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={BottomTabNavigator} />
            <Stack.Screen name="PeopleDetail" component={PeopleDetailScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator