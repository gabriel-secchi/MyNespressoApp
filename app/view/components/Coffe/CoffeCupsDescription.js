
import { View } from 'native-base'
import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity} from 'react-native'

const IconFA = require('react-native-vector-icons/FontAwesome').default
const IconI = require('react-native-vector-icons/Ionicons').default

import Colors from '../../../resources/colors'

const CoffeCupsDescription = ({isVisible, setVisible, cupSize}) => {
    return(
        <Modal animationType='fade'
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setVisible(!isVisible)
            }}
        >
            <View style={styles.screenOpacity}>
                <View style={styles.popupPanel}>
                    <TouchableOpacity style={styles.popupCloseButton} onPress={() => {setVisible(!isVisible)}}>
                        <IconI name="close" size={25} color={Colors.primaryTextColorInverse} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Tamanho ideal para seu café</Text>
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
                </View>
            </View>
        </Modal>
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
    screenOpacity: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: Colors.blackOpacity,
    },
    popupPanel: {
        width: '80%',
        padding: 20,
        borderRadius: 4,
        backgroundColor: Colors.primaryPanelComponents,
    },
    popupCloseButton: {
        backgroundColor: Colors.primaryPanelComponentsInverse,
        padding: 5,
        borderRadius: 50,
        position: 'relative',
        alignSelf: 'flex-end',
        elevation: 5,
        marginEnd: -30,
        marginTop: -30
    },
    title: {
        textAlign: 'center',
        color: Colors.primaryTextColor,
        fontFamily: 'ArimaMadurai-Black',
        fontSize: 18,
        marginBottom: 10,
    },
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