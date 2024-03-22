import {View, Text} from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '../../../public/icons/Icons';


const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
  ];
const UboxDropdown = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles. dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        // inpsutSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <Text>Olis-</Text>
        )}
      />
    );
  };
export default UboxDropdown;
const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
    //   height: 50,

      borderBottomColor: 'red',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
      backgroundColor:"red",
    },
    placeholderStyle: {
        backgroundColor:"red",
      fontSize: 16,
    },
    selectedTextStyle: {
        backgroundColor:"red",
      fontSize: 16,
    },
    iconStyle: {
        backgroundColor:"red",
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
        backgroundColor:"red",
      height: 40,
      fontSize: 16,
    },
  });
