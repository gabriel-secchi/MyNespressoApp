
import React from 'react';
import { StyleSheet, Text, } from 'react-native'; 
import Colors from '../../../resources/colors'

const DecaffeText = ({decaffe}) => {
    if(decaffe)
        return (<Text style={styles.decaffeinated}>Descafeinado</Text>);

    return null;
}

const styles = StyleSheet.create({
    decaffeinated: {
        color: Colors.textColorRed,
        fontFamily: 'cursive',
        fontSize: 16,
    },
})

export default DecaffeText