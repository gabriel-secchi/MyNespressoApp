
import { View } from 'native-base'
import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity} from 'react-native'

const IconFA = require('react-native-vector-icons/FontAwesome').default
const IconI = require('react-native-vector-icons/Ionicons').default

import Popup from '../Popup'
import Colors from '../../../resources/colors'

const CoffeCupsDescription = ({isVisible, setVisible, cupSize}) => {
    return(
        <Popup isVisible={isVisible} setVisible={setVisible} title="Tamanho ideal para seu café" maxWidth='80%'>
            <View style={styles.lineCup}>
                {getCupItem(cupSize.ristretto, 18, 'Ristretto')}
                <Text style={styles.cupDesc}>(25 ml)</Text>
            </View>
            <View style={styles.lineCup}>
                {getCupItem(cupSize.expresso, 25, 'Expresso')}
                <Text style={styles.cupDesc}>(40 ml)</Text>
            </View>
            <View style={styles.lineCup}>
                {getCupItem(cupSize.lungo, 32, 'Lungo')}
                <Text style={styles.cupDesc}>(110 ml)</Text>
            </View>
        </Popup>
    )
}

const getCupItem = (active, size, title) => {
    const color = active ? Colors.primaryTextColor : Colors.secundaryTextColor
    const line = active ? 'none' : 'line-through'

    return(
        <>
            <IconFA name="coffee" style={styles.cup} size={size} color={color} />
            <Text style={[styles.cupName, {color: color, textDecorationLine: line}]}>{title}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    lineCup: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    cup: {
        textAlign: 'center',
        width: 35,
        marginRight: 15,
        marginVertical: 20,
    },
    cupName: {
        fontSize: 18,
        fontFamily: 'BerkshireSwash-Regular',
    },
    cupDesc: {
        marginLeft: 10,
        fontFamily: 'ArimaMadurai-Regular',
        color: Colors.secundaryTextColor,
        fontSize: 14,
    },
})

export default CoffeCupsDescription