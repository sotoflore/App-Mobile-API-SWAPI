import { ActivityIndicator } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import { Colors } from '../../../domain/constants/colors.style';

const Loading = () => {

    const { theme } = useThemeContext();

    return (
        <ActivityIndicator
            size="large"
            color={theme === 'dark' ? Colors.light.background : Colors.dark.background}
        />
    )
}

export default Loading