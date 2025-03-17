import { View, Text, StyleSheet } from 'react-native';
import { ResultPlanet } from '../../../domain/dto/planets/PlanetsSpanishDTO'
import { useThemeContext } from '../../context/ThemeContext';
import { Colors } from '../../../domain/constants/colors.style';
import TextDetail from './TextDetail';

interface PlanetsCardPros {
    planet: ResultPlanet
}

const PlanetCard = ({ planet }: PlanetsCardPros) => {

    const { theme } = useThemeContext();

    return (
        <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
            <Text style={[styles.name, theme === 'dark' && styles.darkName]}>{planet.nombre}</Text>
            <TextDetail text="Clima" value={planet.clima} />
            <TextDetail text="Terreno" value={planet.terreno} />
            <TextDetail text="Población" value={planet.poblacion} />
            <TextDetail text="Diamentro" value={planet.diametro} />
            <TextDetail text="Periodo Orbital" value={planet.periodo_orbital} />
            <TextDetail text="Periodo de rotación" value={planet.periodo_rotacion} />
            <TextDetail text="Gravedad" value={planet.gravedad} />
            <TextDetail text="Agua superficial" value={planet.agua_superficial} />
        </View>
    )
}

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
        color: Colors.dark.secondary,
    },
});

export default PlanetCard