import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation-types';
import GettingStartedScreen from '../screens/GettingStartedScreen';
import StoreSelect from '../screens/StoreSelect';
import TabNavigation from './tabs/TabNavigation';
import DetailsScreen from '../screens/LocalShop/DetailsScreen';

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
        name="LocalStore"
        component={TabNavigation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
