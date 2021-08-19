
import { View } from 'native-base'
import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity} from 'react-native'

const IconFA = require('react-native-vector-icons/FontAwesome').default
const IconI = require('react-native-vector-icons/Ionicons').default

import Colors from '../../resources/colors'
const Popup = (props) => {
    const {
        isVisible, 
        setVisible, 
        title, 
        children
    } = props

    let { maxWidth } = props

    if(maxWidth === undefined)
        maxWidth = '90%'

    return(
        <Modal animationType='fade'
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setVisible(!isVisible)
            }}
        >
            <View style={styles.screenOpacity}>
                <View style={[styles.popupPanel, {width: maxWidth}]}>
                    <TouchableOpacity style={styles.popupCloseButton} onPress={() => {setVisible(!isVisible)}}>
                        <IconI name="close" size={25} color={Colors.primaryTextColorInverse} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                    <>
                        {children}
                    </>
                </View>
            </View>
        </Modal>
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
})

export default Popup