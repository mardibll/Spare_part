import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {FontAwesome} from '../../../public/icons/Icons';
import {Oli} from '../../../public/images/Image';

const Card = ({
  label,
  image,
  price,
  btn,
  btnStyle,
  isRow = true,
  qty,
  ratting,
  follow,
  styleSeller,
  styles,
  onFollow,
}) => {
  return (
    <>
      {isRow ? (
        <TouchableOpacity style={[styleRow.container, styleSeller, styles]}>
          <View style={{}}>
            <View style={{alignItems: 'center'}}>
              <Image source={Oli} style={styleRow.image} />
            </View>
            <Text style={{...styleText, fontWeight: 'bold'}}>{label}</Text>
          </View>
          <View style={{gap: 10}}>
            <Text
              style={{
                fontSize: 12,
                color: styleSeller ? '#9B1400' : 'black',
                width: '100%',
                textAlign: styleSeller ? 'right' : 'left',
              }}>
              {price}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {ratting && (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome
                    name="star"
                    style={styleRow.icon}
                    onPress={onFollow}
                  />
                  <Text style={styleText}>{ratting}</Text>
                </View>
              )}
              {follow && (
                <TouchableOpacity style={{elevation: 19}}>
                  <FontAwesome name="heart" style={styleRow.iconHeart} />
                </TouchableOpacity>
              )}
              {qty && (
                <Text style={{fontSize: 12, color: '#9B1400'}}>Sold {qty}</Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={{backgroundColor: 'white', flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              backgroundColor: 'white',
              marginBottom: 8,
              elevation: 2,
            }}>
            <View>
              {image && <Image source={Oli} style={styleColum.image} />}
              <TouchableOpacity>
                <Text style={{color: '#9B1400', fontSize: 12}}>{btn}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
                {label}
              </Text>
              <View style={{alignItems: 'flex-end', gap: 10}}>
                <Text style={styleText}>x {qty}</Text>
                <Text style={styleText}>{price}</Text>
                {btnStyle && (
                  <TouchableOpacity style={styleColum.btnStyle}>
                    <Text style={{color: 'white', fontSize: 12}}>
                      {btnStyle}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Card;
const styleText = {fontSize: 12, color: 'black'};
const styleRow = StyleSheet.create({
  container: {
    height: 260,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between',
    width: '48%',
    borderRadius: 10,
    shadowColor: '#f1f1e8',
    elevation: 8,
  },
  image: {
    height: 137,
    width: 136,
  },
  icon: {
    color: '#e7bb72',
    fontSize: 25,
    marginRight: 8,
  },
  iconHeart: {
    fontSize: 25,
    color: '#F44336',
  },
});

const styleColum = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#9B1400',
    width: 116,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  image: {
    height: 90,
    width: 80,
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 5,
  },
  container: {
    backgroundColor: 'white',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 15,
    // marginTop: 20,
  },
});
