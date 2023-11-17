import { View, TextInput } from 'react-native'
import React from 'react'
import { buttonStyles } from '../Styles'

const Input = ({ value, setValue, placeholder, secureTextEntry, keyboardType}) => {
    return (
        <View style={buttonStyles.contentInput}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                //style={buttonStyles.contentInput}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
            />
        </View>
    )
}


export default Input