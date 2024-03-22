import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeadPages from '../../components/reusable/HeadPages';
import {Oli, icon_accssory} from '../../../public/images/Image';
import CheckBox from '@react-native-community/checkbox';
import {AntDesign} from '../../../public/icons/Icons';
const Troli = () => {
  const [dataFilter, setdataFilter] = useState([]);
  useEffect(() => {
    setdataFilter(productCart);
  }, []);
  // console.log(dataFilter, 'GAK');
  const checkbox = targetId => {
    const data = productCart.map(item => {
      if (item.id === targetId) {
        item.check_box = !item.check_box;
      }
    });
    console.log(data);
    setdataFilter(data);
  };

  const conter = (targetID, action) => {
    if (action === 'plus') {
      const data = dataFilter.map(item => {
        if (item.id === targetID) {
          // item.qty = item.qty + 1;
          return item;
        } else {
        }
      });
      console.log(data);
    } else {
    }
    // const data = dataFilter.map(item => {
    //   if (action === 'plus' && item.id === targetID) {
    //     {
    //       item, (item.qty = item.qty + 1);
    //     }
    //     return {...item};
    //   } else {
    //   }
    // });
  };
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <View>
          {dataFilter?.map((item, index) => (
            <View key={index} style={style.card}>
              <View style={style.card_content}>
                <View style={{flexDirection: 'row'}}>
                  {/* <Image source={item?.image} style={style.image} /> */}
                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}>
                    <View>
                      <Text style={[style.text, {fontWeight: 'bold'}]}>
                        {item?.name}
                      </Text>
                      <Text style={style.text}>Rp. {item?.price}</Text>
                    </View>

                    <View>
                      <CheckBox
                        disabled={false}
                        value={item?.check_box}
                        onValueChange={() => checkbox(item?.id)}
                        tintColors={{true: '#640B1B', false: 'grey'}}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <AntDesign
                      name="close"
                      style={{fontSize: 15, color: 'black'}}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 8,
                    }}>
                    <TouchableOpacity onPress={() => conter(item?.id, 'minus')}>
                      <AntDesign name="minuscircleo" style={style.icon} />
                    </TouchableOpacity>
                    <Text style={style.text}>{item?.qty}</Text>
                    <TouchableOpacity onPress={() => conter(item?.id, 'plus')}>
                      <AntDesign name="pluscircle" style={style.icon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={style.card_checkout}>
          <View style={style.checkout_content}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                tintColors={{true: '#640B1B', false: 'grey'}}
              />
              <Text style={[style.text, {fontSize: 14}]}>All in</Text>
            </View>
            <Text style={[style.text, {fontSize: 14, fontWeight: 'bold'}]}>
              Sub Total :
            </Text>
            <Text style={[style.text, {fontSize: 14}]}>10</Text>
          </View>
          <TouchableOpacity style={style.btn_checkout}>
            <Text style={{fontSize: 14, color: '#F1F1E8'}}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Troli;

const style = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'black',
  },
  container: {padding: 20, flex: 1, backgroundColor: '#F1F1E8'},
  card_content: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  checkout_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card_checkout: {
    backgroundColor: 'white',
    padding: 20,
    gap: 30,
    marginTop: 70,
    borderRadius: 15,
    elevation: 2,
  },
  btn_checkout: {
    backgroundColor: '#640B1B',
    alignItems: 'center',
    height: 34,
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  image: {
    height: 80,
    width: 80,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#BFDCAE',
    flexWrap: 'wrap',
  },
  icon: {
    fontSize: 22,
    color: '#640B1B',
    elevation: 5,
  },
});

const productCart = [
  {
    id: 0,
    image: Oli,
    name: 'Product A',
    price: 40000,
    qty: 5,
    check_box: true,
  },
  {
    id: 1,
    image: icon_accssory,
    name: 'Product B',
    price: 60000,
    qty: 3,
    check_box: true,
  },
  {
    id: 2,
    image: Oli,
    name: 'Product C',
    price: 30000,
    qty: 2,
    check_box: true,
  },
  {
    image: Oli,
    name: 'Product D',
    price: 20000,
    qty: 1,
    check_box: true,
  },
];
