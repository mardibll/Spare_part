import {View, Text} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home/Home';
import Profil from '../pages/profile/Profil';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Follow from '../pages/follow/Follow';
import Transaction from '../pages/transaction/order/Index';
const Tab = createBottomTabNavigator();
const AppBottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Follow') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Transaction') {
            iconName = focused ? 'payments' : 'payments';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'user' : 'user';
          }
          if (route.name == 'Transaction') {
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else {
            return <Feather name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Follow" component={Follow} />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
};

export default AppBottomStack;
