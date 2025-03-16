import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Result } from '../../../domain/dto/PeopleDTO';
import { useThemeContext } from '../../context/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../domain/constants/colors.style';

interface PersonCardProps {
    person: Result;
}

const PersonCard = ({ person }: PersonCardProps) => {

    const { theme } = useThemeContext();

    const darkButtonDetails = theme === 'dark' && styles.darkButtonDetails;
    const darkTextDetails = theme === 'dark' && styles.darkTextDetails;
    const darkIconColor = theme === 'dark' ? Colors.light.text : Colors.dark.text;

    return (
        <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
            <Text style={[styles.name, theme === 'dark' && styles.darkText]}>{person.name}</Text>
            <Text style={theme === 'dark' && styles.darkText}>📏 Altura: {person.height} cm</Text>
            <Text style={theme === 'dark' && styles.darkText}>⚖️ Peso: {person.mass} kg</Text>
            <Text style={theme === 'dark' && styles.darkText}>🎨 Color de cabello: {person.hair_color}</Text>
            <Text style={theme === 'dark' && styles.darkText}>🖌️ Color de piel: {person.skin_color}</Text>
            <TouchableOpacity style={[styles.buttonDetails, darkButtonDetails]}>
                <Text style={[styles.textDetails, darkTextDetails]}>Ver mas detalles</Text>
                <Icon
                    name="chevron-forward-circle-outline"
                    size={15}
                    color={darkIconColor}
                />
            </TouchableOpacity>
            {/* <Text style={theme === 'dark' && styles.darkText}>🎨 Color de cabello: {person.hair_color}</Text>
            <Text style={theme === 'dark' && styles.darkText}>🖌️ Color de piel: {person.skin_color}</Text>
            <Text style={theme === 'dark' && styles.darkText}>👀 Color de ojos: {person.eye_color}</Text>
            <Text style={theme === 'dark' && styles.darkText}>🎂 Año de nacimiento: {person.birth_year}</Text>
            <Text style={theme === 'dark' && styles.darkText}>⚧️ Género: {person.gender}</Text>
            <Text style={theme === 'dark' && styles.darkText}>🌍 Planeta de origen: {person.homeworld}</Text>
            <Text style={theme === 'dark' && styles.darkText}>🎬 Películas: {person.films.length}</Text>
            <Text style={theme === 'dark' && styles.darkText}>🚀 Naves espaciales: {person.starships.length}</Text>
            <Text style={theme === 'dark' && styles.darkText}>🛺 Vehículos: {person.vehicles.length}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 3,
        borderColor: Colors.light.borderColor,
    },
    darkContainer: {
        backgroundColor: Colors.dark.colorCard,
        borderWidth:0
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.light.text,
    },
    darkText: {
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
        marginTop:10
    },
    darkButtonDetails: {
      backgroundColor:Colors.dark.secondary  
    },
    textDetails: {
        color: Colors.dark.text,
        fontSize: 13,
        fontWeight: 'bold'
    },
    darkTextDetails: {
        color: Colors.light.text,
    }

});

export default PersonCard;
