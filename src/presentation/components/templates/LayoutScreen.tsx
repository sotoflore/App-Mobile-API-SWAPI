import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { Colors } from '../../../domain/constants/colors.style';

interface LayoutScreenProps{
    children: ReactNode;
}

const LayoutScreen = ({ children }: LayoutScreenProps) => {
    
    const { theme } = useThemeContext();

    const darkContainer = theme === 'dark' && styles.darkContainer

    return (
        <View style={[styles.container, darkContainer]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.light.background,
        paddingBottom:25
    },
    darkContainer: {
        backgroundColor: Colors.dark.background
    }

})

export default LayoutScreen;