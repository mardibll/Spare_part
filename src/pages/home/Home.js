import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Iklan_Home} from '../../../public/images/Image';
import UboxSearch from '../../components/reusable/UboxSearch';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '../../../public/icons/Icons';
import Category from '../category/Category';
import Card from '../../components/reusable/CardProduct';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: '#f1f1e8'}}>
        <Image style={style.image} source={Iklan_Home} />
        <View style={style.component}>
          <View style={{width: '62%'}}>
            <UboxSearch placeholder="search" styleadd={{borderRadius: 15}} />
          </View>
          <View style={style.content_stack}>
            <TouchableOpacity>
              <MaterialIcons name="notifications" style={style.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Troli')}>
              <MaterialCommunityIcons name="cart-variant" style={style.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="chatbox-ellipses-sharp" style={style.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={style.text_title}>Best Sellers</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: -20}}>
            <View style={style.content_seller}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Card
                  styleSeller={{width: '18%', height: 215, padding: 10}}
                  key={index}
                  image={true}
                  label={'Nama product'}
                  price={'Rp. 30000'}
                  btnStyle={'Cancel'}
                  btn={'Product details'}
                />
              ))}
            </View>
          </ScrollView>
          <View style={{marginTop: 10}}>
            <Text style={style.text_title}>Category</Text>
            <View style={{paddingTop: 10}}>
              <Category />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },

  icon: {
    fontSize: 22,
    color: '#9B1400',
  },
  component: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text_title: {
    fontSize: 18,
    color: '#640B1B',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  content_stack: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  content_seller: {
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 13,
    paddingLeft: 20,
    paddingRight: 10,
  },
});
