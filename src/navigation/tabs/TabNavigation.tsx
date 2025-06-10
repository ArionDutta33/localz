import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../types/navigation-types';
import LocalHome from '../../screens/LocalShop/LocalHome';
import MyAccount from '../../screens/LocalShop/Myaccount';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';

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
      }}>
      <Tab.Screen 
        name="Home" 
        component={LocalHome}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHome} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="MyAccount" 
        component={MyAccount}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faUser} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
