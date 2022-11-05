import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../screens/login/Login";

import { View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login Screen" component={Login} options={{title: "Login"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}