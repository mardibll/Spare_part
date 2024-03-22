import {View, Text, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FontAwesome} from '../../../public/icons/Icons';

const UboxCard = props => {
  return (
    <View style={style.container}>
      
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold', paddingVertical: 7}}>
          {props.name}
        </Text>
        <Text style={{fontSize: 12}}>{props.price}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              gap: 5,
            }}>
            <FontAwesome name="star" style={style.icon} />
            <Text style={{fontSize: 12}}>{props.ratting}</Text>
          </View>
          <Text
            style={{textAlignVertical: 'bottom', fontSize: 10, color: 'red'}}>
            {props.stok}
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 210,
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
 
  },
  image: {
    height: '50%',
    width: '60%',

    resizeMode: 'stretch',
  },
  icon: {
    color: '#e7bb72',
    fontSize: 26,
    paddingVertical: 10,
  },
});

export default UboxCard;
