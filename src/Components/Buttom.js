import { Pressable, Text } from 'react-native'
import React from 'react'
import { buttonStyles } from '../Styles'

const Buttom = ({onPress, text, customStyles}) => {
  return (
    <Pressable onPress={onPress} style={[buttonStyles.button, customStyles]}>
      <Text style={buttonStyles.textButton}>{text}</Text>
    </Pressable>
  )
}


export default Buttom

