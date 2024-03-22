import { View, Text } from 'react-native'
import React from 'react'
import Card from '../../../components/reusable/CardProduct'

const Ship = () => {
  return (
    <View>
    {[1, 2].map((item, index) => (
      <Card
        key={index}
        image={true}
        label={'Nama product'}
        price={'Rp. 30000'}
        btnStyle={'Cancel'}
        btn={'Product details'}
        isRow={false}
      />
    ))}
  </View>
  )
}

export default Ship