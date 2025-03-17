import { Text } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";
import { Colors } from "../../../domain/constants/colors.style";
import { StyleSheet } from "react-native";

interface TextDetailProps{
    text: string;
    value: string;
}


const TextDetail = ({ text, value }: TextDetailProps) => {
    const { theme } = useThemeContext();
    return (
        <Text style={[styles.textDetail, theme === 'dark' && styles.darkTextDetail]}>
            <Text style={styles.boldText}>{text}:</Text> {value}
        </Text>
    );
};

const styles = StyleSheet.create({
    textDetail: {
        fontSize: 16,
        marginBottom: 6,
        color:Colors.light.text
    },
    darkTextDetail: {
        color: Colors.dark.text
    },
    boldText: {
        fontWeight: 'bold'
    }
});

export default TextDetail;