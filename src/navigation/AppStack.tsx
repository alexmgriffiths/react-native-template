import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/home/Home";

const Stack = createStackNavigator();

export default function AppStack() {
    return (    
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home Screen" component={Home} options={{ title: "Home" }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}