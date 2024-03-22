import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Entypo, MaterialCommunityIcons} from '../../../public/icons/Icons';
import {useNavigation} from '@react-navigation/native';
const HeadPages = props => {
    const navigation=useNavigation()
  return (
    <View style={style.container}>
      <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" style={style.icon} />
        </TouchableOpacity>
        {props.titel ? (
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{props.titel}</Text>
        ) : (
          false
        )}
      </View>
      {props.btn ? (
        <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate("Troli")}>
          <MaterialCommunityIcons
            name="cart-variant"
            style={[style.icon, {color: 'white'}]}
          />


        </TouchableOpacity>
      ) : (
        false
      )}
    </View>
  );
};

export default HeadPages;
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',paddingBottom:20
  },
  icon: {
    fontSize: 20,
  },
  btn: {
    backgroundColor: '#d04e1c',
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 30,
  },
});
