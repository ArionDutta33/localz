import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../types/navigation-types';
import LocalHome from '../../screens/LocalShop/LocalHome';
import MyAccount from '../../screens/LocalShop/Myaccount';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
<<<<<<< HEAD
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';
=======
import {faHome, faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../screens/LocalShop/Search';
import BacardiScreen from '../../screens/LocalShop/Feed';
import DetailsScreen from '../../screens/LocalShop/DetailsScreen';
>>>>>>> 1f3939a887ac88963ad354d05fb0cc2cb547f1cb

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 1f3939a887ac88963ad354d05fb0cc2cb547f1cb
    </Tab.Navigator>
  );
};

export default TabNavigation;
