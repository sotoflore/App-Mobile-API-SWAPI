import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../domain/constants/colors.style';
import { ResultPeople } from '../../../domain/dto/peoples/PeopleSpanishDTO';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import TextDetail from './TextDetail';

interface PersonCardProps {
    people: ResultPeople;
}

type NavigationProps = StackNavigationProp<RootStackParamList, "PeopleDetail">;

const PeopleCard = ({ people }: PersonCardProps) => {

    const { theme } = useThemeContext();
    const navigation = useNavigation<NavigationProps>();

    const darkButtonDetails = theme === 'dark' && styles.darkButtonDetails;
    const darkTextDetails = theme === 'dark' && styles.darkTextDetails;
    const darkIconColor = theme === 'dark' ? Colors.light.text : Colors.dark.text;

    const handleNavigationDetails = () => {
        navigation.navigate('PeopleDetail', { people })
    }

    return (
        <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
            <Text style={[styles.name, theme === 'dark' && styles.darkName]}>{people.nombre}</Text>
            <TextDetail text="Altura (cm)" value={people.altura} />
            <TextDetail text="Peso (kg)" value={people.masa} />
            <TouchableOpacity style={[styles.buttonDetails, darkButtonDetails]}>
                <Text
                    style={[styles.textDetails, darkTextDetails]}
                    onPress={handleNavigationDetails}
                >Ver mas detalles</Text>
                <Icon
                    name="arrow-forward-outline"
                    size={15}
                    color={darkIconColor}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginBottom: 15,
        backgroundColor: Colors.light.colorCard,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: Colors.light.borderColor,
    },
    darkContainer: {
        backgroundColor: Colors.dark.colorCard,
        borderWidth: 0
    },
    name: {
        fontSize: 23,
        fontWeight: 'bold',
        color: Colors.light.text,
        marginBottom: 10
    },
    darkName: {
        color: Colors.dark.text,
    },
    buttonDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        backgroundColor: Colors.dark.background,
        borderRadius: 6,
        alignSelf: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginTop: 10
    },
    darkButtonDetails: {
        backgroundColor: Colors.dark.secondary
    },
    textDetails: {
        color: Colors.dark.text,
        fontSize: 15,
        fontWeight: 'bold'
    },
    darkTextDetails: {
        color: Colors.light.text,
    }

});

export default PeopleCard;
