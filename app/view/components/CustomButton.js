
import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import Colors from '../../resources/colors'

const CustomButom = (props) =>  {
    const {text, style, textStyle, onPress} = props

    return(
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} >
            <Text style={[styles.textButton, textStyle]}>{text}</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primaryButtonColor,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 2,
        elevation: 3
    },
    textButton: {
        color: Colors.primaryTextColorInverse,
        fontSize: 16,
        fontFamily: 'ArimaMadurai-Bold',
    }
})


export default CustomButom