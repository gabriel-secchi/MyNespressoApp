
import { View } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import { NativeBaseProvider } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'

import CoffeCupsDescription from './CoffeCupsDescription'
import CoffeRateForm from './CoffeRateForm'
import Colors from '../../../resources/colors'


const CoffeRate = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    //let {cupSize} = props
    
    return(
        <NativeBaseProvider>
            <View style={styles.panel}>
                <CoffeRateForm isVisible={modalVisible} setVisible={setModalVisible} />
                <TouchableOpacity style={styles.buttonRate} onPress={() => {setModalVisible(!modalVisible)}}>
                    <Icon name="hearto" size={30} color={Colors.primaryTextColor} />
                </TouchableOpacity>
            </View>
        </NativeBaseProvider>
    )
}

//<CoffeCupsDescription isVisible={modalVisible} setVisible={setModalVisible} cupSize={cupSize}  />


const styles = StyleSheet.create({
    panel: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonRate: {
        borderRadius: 25,
        paddingTop: 2,
        paddingHorizontal: 2,
    },
})

export default CoffeRate