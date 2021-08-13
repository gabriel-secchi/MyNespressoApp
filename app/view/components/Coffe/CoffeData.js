
import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import CoffeIntensity from './CoffeIntensity'
import CoffeDataItem from './CoffeDataItem'
import Colors from '../../../resources/colors';

const CoffeData = ({coffeItem}) => {

    return (
        <>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={styles.panelItems} >
                    <CoffeDataItem text='Torrefação' intensity={coffeItem.Burn} />
                    <CoffeDataItem text='Acidez' intensity={coffeItem.Acidity} />
                </View>

                <View style={styles.panelImage} >
                    <Image style={styles.imageComponent} source={{ uri: coffeItem.image_for_list }}/>
                </View>
          
                <View style={styles.panelItems} >
                    <CoffeDataItem text='Amargor' intensity={coffeItem.Bitterness} />
                    <CoffeDataItem text='Corpo' intensity={coffeItem.Body} />
                </View>
            </View>

            <CoffeDataItem text='Intensidade' intensity={coffeItem.intensity} 
                maxIntensity={13} style={styles.dataItemIntensity} />
        </>
    ) 
}

const styles = StyleSheet.create({
    panelItems: {
        width: '32%', 
        alignItems: 'center', 
        justifyContent:'space-around'
    },
    panelImage: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageComponent: {
        width: '100%',
        minHeight: 200,
        resizeMode: 'contain',
    },
    dataItemIntensity: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10
    },
})

export default CoffeData;
