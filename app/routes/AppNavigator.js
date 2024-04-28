
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import { createStackNavigator } from '@react-navigation/stack';

export default function AppNavigator() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} >
                <Stack.Screen name="Root" component={BottomTabNavigation} />
           </Stack.Navigator>
        </NavigationContainer>
    );
}