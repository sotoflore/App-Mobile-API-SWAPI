import { View, Text, StyleSheet } from 'react-native'
import { ResultFilm } from '../../../domain/dto/films/FilmsSpanishDTO';
import { Colors } from '../../../domain/constants/colors.style';
import { useThemeContext } from '../../context/ThemeContext';
import TextDetail from './TextDetail';

interface FilmsCardProps {
    film: ResultFilm;
}

const FilmsCard = ({ film }: FilmsCardProps) => {

    const { theme } = useThemeContext();

    return (
        <View style={[styles.itemContainer, theme === 'dark' && styles.darkItemContainer]}>
            <Text style={[styles.title, theme === 'dark' && styles.darkTitle]}>{film.titulo}</Text>
            <TextDetail text='Episodio' value={film.id_episodio.toString()} />
            <TextDetail text='Director' value={film.director} />
            <TextDetail text='Productor' value={film.productor} />
            <TextDetail text='Fecha de lanzamiento' value={film.fecha_lanzamiento} />
            <TextDetail text='Textos iniciales' value={film.texto_inicial} />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        marginBottom: 15,
        backgroundColor: Colors.light.colorCard,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: Colors.light.borderColor,
    },
    darkItemContainer: {
        backgroundColor: Colors.dark.colorCard,
        borderWidth: 0
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    darkTitle: {
        color: Colors.light.secondary
    }
});
export default FilmsCard;