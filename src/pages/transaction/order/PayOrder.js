import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {getFilterProduct} from '../../../components/fetch/Filterproduct';
import {storeDataTroli} from '../../../components/dataStatik/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../../../components/reusable/CardProduct';

const Pay = () => {
  return (
  <View style={{}} >
      <ScrollView style={{}}>
      {[1, 2, 3,3,3,,3,3,3,33,,3,3,3,3,3,3,3,3,3].map((item, index) => (
        <Card
          key={index}
          image={true}
          label={'Nama product'}
          price={'Rp. 30000'}
          btnStyle={'Cancel'}
          btn={'Product details'}
          isRow={false}
        />
      ))}
    </ScrollView>
  </View>
  );
};

export default Pay;
