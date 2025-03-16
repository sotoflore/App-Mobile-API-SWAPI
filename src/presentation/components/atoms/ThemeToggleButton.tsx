import { Alert, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useThemeContext } from "../../context/ThemeContext";
import { Colors } from "../../../domain/constants/colors.style";

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useThemeContext();

    const showThemeSwitch = () => {
        Alert.alert(
            "Cambiar tema",
            "Selecciona el modo de la aplicación",
            [
                {text: "Modo Claro",
                    onPress: () => theme !== 'light' && toggleTheme(),
                },
                {text: "Modo Oscuro",
                    onPress: () => theme !== 'dark' && toggleTheme(),
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <TouchableOpacity onPress={toggleTheme}>
            <Icon
                name="contrast-outline"
                size={30}
                color={theme === 'light' ? Colors.dark.background : Colors.light.background}
                onPress={showThemeSwitch}
            />
        </TouchableOpacity>
        
    );
};

export default ThemeToggleButton;