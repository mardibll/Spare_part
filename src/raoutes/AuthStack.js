import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppBottomStack from './AppBottomStack';
import FilterCategory from '../pages/category/FilterCategory';
import Troli from '../pages/troli/Troli';
import Transaction from '../pages/transaction/order/Index';
import Feedback from '../pages/transaction/order/Feedback';
import DetailProduct from '../pages/category/DetailProduct';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppBottomStack" component={AppBottomStack} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />

      <Stack.Screen name="Troli" component={Troli} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="FilterCategory" component={FilterCategory} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
}
