import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import UboxSearch from '../../components/reusable/UboxSearch';
import HeadPages from '../../components/reusable/HeadPages';
import UboxDropdown from '../../components/reusable/UboxDropdown';
import UboxCard from '../../components/reusable/UboxCard';
import {data} from '../../components/dataStatik/Product.json';
import {Oli} from '../../../public/images/Image';
import Card from '../../components/reusable/CardProduct';
import {getFilterProduct} from '../../components/fetch/Filterproduct';
const FilterCategory = ({navigation, route}) => {
  const {item} = route.params;
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const dataProduct = getFilterProduct('category', item);
    setproduct(dataProduct);
  }, []);

  return (
    <View style={{paddingHorizontal: 20, backgroundColor: '#f1f1e8', flex: 1}}>
      <HeadPages titel={'Category'} btn={true} />
      <UboxSearch placeholder={'Search Product'} />
      <Text>Other Categories</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.card}>
          {product?.map((item, index) => (
            <Card
              styles={{width: '47%'}}
              key={index}
              image={true}
              label={item.name}
              price={`Rp. ${item.price}`}
              btnStyle={'Cancel'}
              btn={'Product details'}
              ratting={item.ratting}
              qty={item.stock}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterCategory;

const style = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    gap: 13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
  
  },
  content: {
    width: '45%',

    shadowColor: '#000',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 12,
  },
});
