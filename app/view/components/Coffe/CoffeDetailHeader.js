
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import CoffeCups from './CoffeCups'
import CoffeRate from './CoffeRate'

const CoffeDetailHeader = ({coffeItem}) => {
    
    return (
        <View style={styles.panelCoffeDetailHeader}>
            <CoffeCups cupSize={coffeItem.cup_size} />
            <CoffeRate rating={coffeItem.rate}/> 
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