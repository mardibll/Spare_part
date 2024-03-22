import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {MotorCyle} from '../../public/images/Image';

const UboxProfill = () => {
  return (
    <View style={{position: 'relative', alignItems: 'center', height: 180}}>
      <Image source={MotorCyle} style={style.image} />
      <View style={{position: 'absolute',bottom:0,alignItems:"center",gap:4,elevation:3}}>
        <Text style={{color:"#9B1400",fontWeight:"bold",letterSpacing:1}}>@kevin.alls</Text>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRBuo4ZSlILA1D_VbBWAtYhGOimkou3LBPg&usqp=CAU",
          }}
          style={{height:65,width:65,borderRadius:100}}
        />
      </View>
    </View>
  );
};

export default UboxProfill;

const style = StyleSheet.create({
  image: {
    height: 150,
    width: '100%',
  },
});
