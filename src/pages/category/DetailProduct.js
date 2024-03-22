import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Oli,
  icon_accssory,
  icon_accu,
  icon_lamps,
  icon_oil,
} from '../../../public/images/Image';
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from '../../../public/icons/Icons';
import HeadPages from '../../components/reusable/HeadPages';

const DetailProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const handleNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: Dimensions.get('window').width * (currentIndex + 1),
        animated: true,
      });
    }
  };

  const handlePrevious = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: Dimensions.get('window').width * (currentIndex - 1),
        animated: true,
      });
    }
  };

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const screenWidth = Dimensions.get('window').width;
    const index = Math.round(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };
  const [Active, setisActive] = useState(false);
  const onClick_Icon = () => {
    setisActive(!Active);
  };
  return (
    <View style={{padding: 20, flex: 1, backgroundColor: '#F1F1E8'}}>
      <View
        style={{
          backgroundColor: '#E6E6DA',
          flex: 1,
          borderRadius: 20,
          justifyContent: 'space-between',
        }}>
        <View>
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            pagingEnabled={true}
            onScroll={handleScroll}
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: -20}}>
            {image.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  width: Dimensions.get('window').width,
                }}
                key={index}>
                <View
                  style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 200,
                    width: 370,
                    marginHorizontal: 20,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    shadowColor: '#F1F1E8',
                    elevation: 10,
                  }}>
                  <TouchableOpacity onPress={handlePrevious}>
                    <MaterialCommunityIcons
                      name="arrow-left-drop-circle"
                      style={{fontSize: 30, color: '#9B1400'}}
                    />
                  </TouchableOpacity>

                  <Image source={item.img} style={{width: 153, height: 146}} />

                  <TouchableOpacity onPress={handleNext}>
                    <MaterialCommunityIcons
                      name="arrow-right-drop-circle"
                      style={{fontSize: 30, color: '#9B1400'}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{padding: 20, paddingBottom: 80}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{gap: 10}}>
              <Text
                style={{fontSize: 18, color: '#9B1400', fontWeight: 'bold'}}>
                Rp 45.000
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Shell Hellix HX5 15W30 1L - Oli
              </Text>
            </View>
            <TouchableOpacity onPress={() => onClick_Icon()}>
              <MaterialCommunityIcons
                name="heart"
                style={{
                  fontSize: 35,
                  color: Active ? '#FF3D00' : 'gray',
                  elevation: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 5,
              marginTop: 30,
            }}>
            <Text style={{fontSize: 14, color: '#9B1400', fontWeight: 'bold'}}>
              Product Information
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <View>
                <Text style={{color: 'black', fontSize: 12}}>Stock</Text>
                <Text style={{color: 'black', fontSize: 12}}>Sold Out</Text>
              </View>
              <View>
                <Text style={{color: 'black', fontSize: 12}}>1000</Text>
                <Text style={{color: 'black', fontSize: 12}}>100</Text>
              </View>
            </View>

            <View style={{gap: 8, marginTop: 20}}>
              <Text
                style={{fontSize: 14, color: '#9B1400', fontWeight: 'bold'}}>
                Item Description
              </Text>
              <Text style={{color: 'black', fontSize: 12}}>
                Size 100/80-14, Tubeless / Without tubeless valve inner tube not
                included in sale.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <TouchableOpacity>
            <MaterialIcons
              name="chat-bubble"
              style={{fontSize: 35, color: '#640B1B', elevation: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{elevation: 10}}>
            <MaterialCommunityIcons
              name="cart-variant"
              style={{fontSize: 35, color: '#640B1B', elevation: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 220,
              height: 36,
              backgroundColor: '#640B1B',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              elevation: 10,
            }}>
            <Text style={{color: 'white'}}>Buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;

const image = [
  {
    img: icon_accssory,
  },
  {
    img: Oli,
  },
  {
    img: icon_accu,
  },
  {
    img: icon_lamps,
  },
];
