import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './NavigationService';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Screens from './Screens';
import { EmptyScreen } from '../screens/EmptyScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name={Screens.EMPTY} component={EmptyScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
