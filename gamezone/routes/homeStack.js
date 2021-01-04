import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetail";
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{ 
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 80,
                },
                headerTintColor: '#444'
            }}
        >
            <Stack.Screen 
                name='Home' 
                component={Home} 
                options={({ navigation }) => {
                    return {
                        headerTitle: () => <Header navigation={navigation} title='GameZone' />,
                    }
                }}
            />
            <Stack.Screen 
                name='Review' 
                component={ReviewDetails} 
                options={{ 
                    title: 'Review Detail',
                }}
            />
        </Stack.Navigator>
        // <NavigationContainer>
        // </NavigationContainer>
    )
}