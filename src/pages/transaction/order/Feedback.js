import {View, Text} from 'react-native';
import React from 'react';
import HeadPages from '../../../components/reusable/HeadPages';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Card from '../../../components/reusable/CardProduct';
import {Oli} from '../../../../public/images/Image';
import {EvilIcons, Feather} from '../../../../public/icons/Icons';
const Feedback = () => {
  return (
    <View style={{padding: 20, gap: 8}}>
      <Card
        styles={{borderTopStartRadius: 15, borderTopEndRadius: 15, height: 135}}
        isRow={false}
        qty={2}
        price={'Rp35000'}
        image={Oli}
        label={'Nama Product'}
      />
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          height: 130,
          justifyContent: 'center',
        }}>
        <Text style={{fontFamily: 'Bree', color: 'black', fontSize: 14}}>
          Evaluation
        </Text>
        <AirbnbRating
          size={30}
          reviews={['Terrible', 'Bad', 'Okey', 'Good']}
          showRating={false}
          starContainerStyle={{gap: 10, marginTop: 10}}
          reviewSize={20}
          defaultRating={0}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 160,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          flexDirection: 'row',
        }}>
        {[1,2,3].map((item, index) => (
          <View key={index} style={{justifyContent:"center"}}>
            <EvilIcons name="image" style={{fontSize: 120, color: '#e5e7e6'}} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Feedback;
