import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import UboxSearch from '../../components/reusable/UboxSearch';
import {Fontisto} from '../../../public/icons/Icons';
import {Equalize} from '../../../public/images/Image';
import Card from '../../components/reusable/CardProduct';

const Follow = () => {
  return (
    <View style={{padding: 20,flex:1,paddingBottom:0}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom:5
        }}>
        <UboxSearch placeholder={'Products Search'} styleadd={{width: '80%'}} />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 7,
            alignItems: 'center',
            width: 60,
            elevation:0.5
          }}>
          <Image source={Equalize} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
      <View
        style={{
          gap: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingTop:15,
          paddingBottom:10
        }}>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <Card
            key={index}
            image={true}
            label={'Nama product'}
            price={'Rp. 30000'}
            btnStyle={'Cancel'}
            btn={'Product details'}
            ratting={4.5}
            follow={true}
          />
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

export default Follow;
