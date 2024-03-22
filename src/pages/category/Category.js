import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Iklan_Home,
  Oli,
  icon_accssory,
  icon_accu,
  icon_bolts,
  icon_lamps,
  icon_oil,
  icon_sparepat,
  icon_tires,
  icon_tools,
} from '../../../public/images/Image';
import {data} from '../../components/dataStatik/Product.json';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={style.container}>
        {Menu_Category.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('FilterCategory', {item: item.category})
            }
            style={{alignItems: 'center', gap: 3}}>
            <View style={style.image}>
              <Image
                source={item.img}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <Text style={{color: 'black', fontSize: 12}}>{item.category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Category;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f1f3f2',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  image: {
    backgroundColor: '#e4e5e0',
    borderRadius: 9,
    width: 63,
    height: 63,
    elevation: 7,
    shadowColor: '#e4e5e0',
  },
});

const Menu_Category = [
  {
    category: 'Oil',
    img: icon_oil,
  },
  {
    category: 'Tires',
    img: icon_tires,
  },
  {
    category: 'Accu',
    img: icon_accu,
  },
  {
    category: 'Spareparts',
    img: icon_sparepat,
  },
  {
    category: 'Lamps',
    img: icon_lamps,
  },
  {
    category: 'Bolts',
    img: icon_bolts,
  },
  {
    category: 'Tools',
    img: icon_tools,
  },
  {
    category: 'Accessory',
    img: icon_accssory,
  },
];
