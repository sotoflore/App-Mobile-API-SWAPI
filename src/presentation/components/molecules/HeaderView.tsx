import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useThemeContext } from '../../context/ThemeContext';
import ThemeToggleButton from '../atoms/ThemeToggleButton';
import { Colors } from '../../../domain/constants/colors.style';

interface HeaderViewPros {
    title: string;
}

const HeaderView = ({ title }: HeaderViewPros) => {

    const { theme } = useThemeContext();

    const darkHeader = theme === 'dark' && styles.darkHeader;
    const darkTitle = theme === 'dark' && styles.darkText;

    return (
        <View style={[styles.header, darkHeader]}>
            <Text style={[styles.title, darkTitle]}>{title}</Text>
            <ThemeToggleButton />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 35,
        paddingHorizontal: 20,
        backgroundColor: Colors.light.background
    },
    darkHeader: {
        backgroundColor: Colors.dark.background
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.text,
    },
    darkText: {
        color: Colors.dark.text
    },
});

export default HeaderView;