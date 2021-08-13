
import React from 'react'
import { StyleSheet, Text, } from 'react-native'

import DecaffeText from './DecaffeText'
import Colors from '../../../resources/colors'

const CoffeTitle = (props) => {
    
    return (
        <Text style={styles.title}>
            {props.name} <DecaffeText decaffe={props.decaffeinated} />
        </Text>
    )
}

const styles = StyleSheet.create({
    title:  {
        color: Colors.primaryTextColor,
        fontSize: 20,
        fontFamily: 'BerkshireSwash-Regular',
    },
})

export default CoffeTitle