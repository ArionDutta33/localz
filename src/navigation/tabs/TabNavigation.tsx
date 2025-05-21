import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../types/navigation-types';
import LocalHome from '../../screens/LocalShop/LocalHome';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: '#fb8500',
        tabBarIcon: ({color}) => (
          <FontAwesomeIcon icon={faHome} size={24} color={color} />
        ),
      }}>
      <Tab.Screen name="Home" component={LocalHome} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
