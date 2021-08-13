
import React from 'react';

import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
} from 'react-native';

import CoffeIntensity from './CoffeIntensity'
import Colors from '../../../resources/colors';

const CoffeDataItem = ({text, intensity, maxIntensity, style}) => {
    maxIntensity = maxIntensity || 5
    style = style || styles.dataItem

    return (
        <View style={style}>
            <Text style={styles.dataItemText}>{text}</Text>
            <CoffeIntensity intensity={intensity} maxIntensity={maxIntensity} showNumber={false} />
        </View>
    ) 
}

const styles = StyleSheet.create({
    dataItem: {
        alignItems: 'center',
    },
    dataItemText: {
        fontSize: 18,
        marginBottom: 8,
        fontFamily: 'ArimaMadurai-Black',
    },
})

export default CoffeDataItem;
