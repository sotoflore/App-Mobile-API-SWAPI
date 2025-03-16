import { Button, StyleSheet, Text } from 'react-native'
import { View, TextInput } from 'react-native'
import { Colors } from '../../../domain/constants/colors.style';
import { TouchableOpacity } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';

interface SearchPeopleProps {
    searchCharacters: string;
    handleTextChange: (text: string) => void;
    handleSearchCharacters: () => void;
}

const SearchCharacter = ({
    searchCharacters,
    handleTextChange,
    handleSearchCharacters
}: SearchPeopleProps) => {

    const { theme } = useThemeContext();
    const darkSearchInput = theme === 'dark' && styles.darkSearhInput;
    const placeholderText = theme === 'dark' ? Colors.dark.text : undefined;

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.searchInput, darkSearchInput]}
                placeholder="Buscar personaje..."
                placeholderTextColor={placeholderText}
                value={searchCharacters}
                onChangeText={handleTextChange}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearchCharacters}>
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 25
    },
    searchInput: {
        flex: 1,
        borderColor: 'gray',
        color: Colors.light.text,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        paddingRight: 40,
        height: 40,
    },
    darkSearhInput: {
        color:Colors.dark.text
    },
    searchButton: {
        position: 'absolute',
        right: 6,
        backgroundColor: Colors.light.primary,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        color: Colors.dark.text,
        fontWeight: 'bold',
    },
});

export default SearchCharacter