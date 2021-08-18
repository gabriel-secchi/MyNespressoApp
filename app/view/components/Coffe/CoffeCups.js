
import { View } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import { NativeBaseProvider } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import Colors from '../../../resources/colors'
import CoffeCupsDescription from './CoffeCupsDescription'


const CoffeCups = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    let {cupSize} = props
    
    return(
        <NativeBaseProvider>
            <View style={styles.panel}>
                <CoffeCupsDescription isVisible={modalVisible} setVisible={setModalVisible} cupSize={cupSize}  />
                <TouchableOpacity style={styles.panelCups} onPress={() => { setModalVisible(!modalVisible) }}>
                    {getCup(18, cupSize.ristretto)}
                    {getCup(25, cupSize.expresso)}
                    {getCup(32, cupSize.lungo)}
                </TouchableOpacity>
            </View>
        </NativeBaseProvider>
    )
}


const getCup = (size, active) => {
    return(
        <Icon name="coffee" 
            style={styles.cup} 
            size={size} 
            color={active ? Colors.primaryTextColor : Colors.secundaryTextColor} 
        />
    )
}

const styles = StyleSheet.create({
    panel: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    panelCups: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cup: {
        marginRight: 10
    },
})

export default CoffeCups