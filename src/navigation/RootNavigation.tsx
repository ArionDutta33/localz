import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation-types';
import GettingStartedScreen from '../screens/GettingStartedScreen';
import StoreSelect from '../screens/StoreSelect';
import LocalHome from '../screens/LocalShop/LocalHome';

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
        name="StoreSelect"
        component={StoreSelect}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LocalHome"
        component={LocalHome}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
