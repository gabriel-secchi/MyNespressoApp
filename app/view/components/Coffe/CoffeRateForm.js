
import { View } from 'native-base'
import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity} from 'react-native'

const IconFA = require('react-native-vector-icons/FontAwesome').default
const IconI = require('react-native-vector-icons/Ionicons').default

import Popup from '../Popup'

import Colors from '../../../resources/colors'

const CoffeRateForm = ({isVisible, setVisible, cupSize}) => {
    return(
        <Popup isVisible={isVisible} setVisible={setVisible} title="Bora Avaliar!?">
            <View>
                <Text> teste 123 456</Text>
            </View>
        </Popup>
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

export default CoffeRateForm