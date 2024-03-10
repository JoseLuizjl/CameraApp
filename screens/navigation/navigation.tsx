import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import HomePage from '../Main/HomePage';
import CameraApp from '../Camera/CameraApp';

const Stack = createStackNavigator();

export default function NavigationPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CameraApp"
          component={CameraApp}
          options={{
            title:'',
            headerTransparent: true,
            headerTintColor: '#efefef',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
