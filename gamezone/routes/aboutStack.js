import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator 
            initialRouteName='About'
            screenOptions={{ 
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 80,
                },
                headerTintColor: '#444'
            }}
        >
            <Stack.Screen 
                name='About' 
                component={About} 
                options={({ navigation }) => {
                    return {
                        headerTitle: () => <Header navigation={navigation} title='About GameZone' />,
                    }
                }}
            />
        </Stack.Navigator>
        // <NavigationContainer>
        // </NavigationContainer>
    )
}