import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator 
            headerMode="none"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
}