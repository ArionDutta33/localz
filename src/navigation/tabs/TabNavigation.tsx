import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../types/navigation-types';
import LocalHome from '../../screens/LocalShop/LocalHome';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../screens/LocalShop/Search';
import BacardiScreen from '../../screens/LocalShop/Feed';
import DetailsScreen from '../../screens/LocalShop/DetailsScreen';

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
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHome} color={color} />
          ),
        }}
        name="Home"
        component={LocalHome}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faSearch} color={color} />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faSearch} color={color} />
          ),
        }}
        name="Feed"
        component={BacardiScreen}
      />
      <Tab.Screen name="Details" component={BacardiScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
