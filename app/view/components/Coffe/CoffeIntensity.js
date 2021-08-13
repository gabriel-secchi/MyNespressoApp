
import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'

import Colors from '../../../resources/colors'


const CoffeIntensity = (props) => {
    let {intensity, maxIntensity, showNumber} = props
    if(maxIntensity == undefined)
        maxIntensity = 13
    if(showNumber == undefined)
        showNumber = true

    return(
        <View style={styles.viewIntensity}>
            {getIntensityList(intensity, maxIntensity)}
            {getTextIntensity(intensity, showNumber)}
        </View>
    )
}

const getIntensityList = (intensity, maxIntensity) =>{
    let intensityList = [];
    for (let i = 0; i < maxIntensity; i++) {
        const space = i == 0 ? 0 : 6
        if(i < intensity)
            intensityList.push(<View key={i} style={[styles.intensity, {marginLeft: space}]} />);
        else
            intensityList.push(<View key={i} style={[styles.intensity, styles.intensityInative, {marginLeft: space}]} />);
    }
    return intensityList;
}

const getTextIntensity = (intensity, showNumber) => {
    if(showNumber == false)
        return null

    return(
        <Text style={styles.intensityText}>{intensity}</Text>
    )
}

const styles = StyleSheet.create({
    viewIntensity: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    intensity: {
        width: 10,
        height: 10,
        borderRadius: 2,
        backgroundColor: Colors.primaryTextColor,
    },
    intensityInative: {
        backgroundColor: Colors.placeHolder,
    },
    intensityText: {
        color: Colors.primaryTextColor,
        fontSize: 14,
        fontFamily: 'serif',
        fontWeight: 'bold',
        marginLeft: 10,
    },
})

export default CoffeIntensity