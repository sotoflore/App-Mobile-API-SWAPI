import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../../domain/constants/colors.style';
import { useThemeContext } from '../../context/ThemeContext';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import TextDetail from '../../components/molecules/TextDetail';

interface PeopleDetailScreenProps {
    route: RouteProp<RootStackParamList, "PeopleDetail">;
}

const PeopleDetailScreen = ({ route }: PeopleDetailScreenProps) => {

    const { people } = route.params;
    const { theme } = useThemeContext();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" size={30} color={theme === 'dark' ? Colors.dark.text : Colors.light.text} />
                <Text style={[styles.textBack, theme === 'dark' && styles.darkTextBack]}>Regresar</Text>
            </TouchableOpacity>
            <View style={styles.detailsContainer}>
                <Text style={[styles.name, theme === 'dark' && styles.darkName]}>{people.nombre}</Text>
                <TextDetail text="Altura (cm)" value={people.altura} />
                <TextDetail text="Peso (kg)" value={people.masa} />
                <TextDetail text="Color de cabello" value={people.color_pelo} />
                <TextDetail text="Color de piel" value={people.color_piel} />
                <TextDetail text="Color de ojos" value={people.color_ojos} />
                <TextDetail text="Año de nacimiento" value={people.año_nacimiento} />
                <TextDetail text="Género" value={people.genero} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    darkContainer: {
        backgroundColor: Colors.dark.background,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap:4
    },
    textBack: {
        color: Colors.light.text,
        fontSize:18
    },
    darkTextBack: {
        color: Colors.dark.text,
    },
    detailsContainer: {
        marginTop: 35,
        padding: 15,
        borderRadius: 10,
    },
    name: {
        marginTop:50,
        fontSize: 23,
        fontWeight: 'bold',
        color: Colors.light.text,
        marginBottom: 16,
    },
    darkName: {
        color: Colors.dark.secondary,
    }
});

export default PeopleDetailScreen