import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Feather} from '../../../public/icons/Icons';
const UboxSearch = ({styleadd,placeholder}) => {
  return (
    <View style={[style.container,styleadd]}>
      <Feather name={'search'} style={style.icons} />
      <TextInput style={style.input} placeholder={placeholder} />
    </View>
  );
};

export default UboxSearch;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  input: {
    width: '90%',
    paddingHorizontal: 10,
  },
  icons: {
    fontSize: 18,
    color: 'black',
  },
});
