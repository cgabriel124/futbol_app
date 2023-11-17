import { Pressable, Text } from 'react-native'
import React from 'react'
import { buttonStyles } from '../Styles'

const Buttom = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={buttonStyles.button}>
      <Text style={buttonStyles.textButton}>{text}</Text>
    </Pressable>
  )
}


export default Buttom