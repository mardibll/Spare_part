import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MotorCyle} from '../../../../public/images/Image';
import {FontAwesome5, MaterialIcons} from '../../../../public/icons/Icons';
import Pay from './PayOrder';
import Ship from './ShipOrder';
import Receive from './ReceiveOrder';
import Done from './DoneOrder';
import UboxProfill from '../../../components/UboxProfill';

const stack = [
  {
    name: 'Pay',
    icon: <FontAwesome5 name="wallet" size={20} />,
  },
  {
    name: 'Ship',
    icon: <FontAwesome5 name="box-open" size={20} />,
  },
  {
    name: 'Receive',
    icon: <FontAwesome5 name="truck" size={20} />,
  },
  {
    name: 'Done',
    icon: <MaterialIcons name="file-download-done" size={30} />,
  },
];

const Transaction = () => {
  const [stackNav, setstackNav] = useState([]);
  const [pagesStack, setpagesStack] = useState('Pay');

  useEffect(() => {
    const filter = stack.map(item => {
      if (item.name === 'Pay') {
        return {
          ...item,
          status: true,
        };
      } else {
        return {
          ...item,
          status: false,
        };
      }
    });
    setstackNav(filter);
  }, []);

  const ActiveStack = active => {
    setpagesStack(active);
    const filter = stackNav.map(item => {
      if (item.name === active) {
        return {...item, status: true};
      } else {
        return {...item, status: false};
      }
    });
    setstackNav(filter);
  };
  return (
    <View style={{backgroundColor: '#f1f1e8'}}>
      <UboxProfill />
      <View style={{padding: 20}}>
        <View style={style.container_stack}>
          {stackNav?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                style.btn_stack,
                {backgroundColor: item.status ? '#9B1400' : 'white'},
              ]}
              onPress={() => ActiveStack(item.name)}>
              <Text
                style={{
                  height: 20,
                  textAlignVertical: 'center',
                  color: item.status ? 'white' : '#9B1400',
                }}>
                {' '}
                {item.icon}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: item.status ? 'white' : '#9B1400',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          {pagesStack === 'Pay' && <Pay />}
          {pagesStack === 'Ship' && <Ship />}
          {pagesStack === 'Receive' && <Receive />}
          {pagesStack === 'Done' && <Done />}
        </View>
      </View>
    </View>
  );
};

export default Transaction;

const style = StyleSheet.create({
  img_background: {
    width: '100%',
    height: 155,
  },
  container_stack: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  btn_stack: {
    padding: 7,
    alignItems: 'center',
    textAlign: 'center',
    width: '24%',
    borderRadius: 7,
    color: 'white',
  },
});
