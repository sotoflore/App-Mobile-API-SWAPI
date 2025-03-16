import { StyleSheet, Text } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';
import { Colors } from '../../../domain/constants/colors.style';

interface TextByNoDataProps{
    text?: string;
}

const TextByNoData = ({
    text = "No hay datos disponibles"
}: TextByNoDataProps) => {

    const { theme } = useThemeContext()
    
    const darkText = theme === 'dark' && styles.darkText;

    return (
        <Text style={[styles.text, darkText]}>{ text }</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.light.text,
    },
    darkText: {
        color: Colors.dark.text,
    },
})

export default TextByNoData;