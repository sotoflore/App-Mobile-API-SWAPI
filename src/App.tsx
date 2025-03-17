import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider} from './presentation/context/ThemeContext';
import StackNavigator from './presentation/navigation/StackNavigator';


const App = () => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <NavigationContainer>
                    <StackNavigator/>
                </NavigationContainer>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App