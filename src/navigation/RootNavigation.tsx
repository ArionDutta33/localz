import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/LocalShop/Home';
import {RootStackParamList} from '../types/navigation-types';
import GettingStartedScreen from '../screens/GettingStartedScreen';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GettingStarted"
        component={GettingStartedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
