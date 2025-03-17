import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import { Colors } from '../../../domain/constants/colors.style';

const Loading = () => {

    const { theme } = useThemeContext();

    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color={theme === 'dark' ? Colors.dark.background : Colors.light.background}
            />
            <Text style={[styles.text, theme === 'dark' && styles.textDark]}>Cargando datos...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: Colors.light.text,
    },
    textDark: {
        color:Colors.dark.text
    }
});

export default Loading