
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import CoffeCups from './CoffeCups'
import CoffeRate from './CoffeRate'
import Colors from '../../../resources/colors'

const CoffeDetailHeader = ({coffeItem}) => {
    
    return (
        <View style={styles.panelCoffeDetailHeader}>
            <CoffeCups cupSize={coffeItem.cup_size} />
            <CoffeRate />
        </View>
    )
}

const styles = StyleSheet.create({
    panelCoffeDetailHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 10,
        paddingHorizontal: 15,
    },
})

export default CoffeDetailHeader