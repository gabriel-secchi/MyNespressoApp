import React from 'react';

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import CoffeTitle from '../Coffe/CoffeTitle'
import CoffeIntensity from '../Coffe/CoffeIntensity'
import Colors from '../../../resources/colors';


const ListViewItemCoffe = ({coffeItem, navigation }) => {
    return (
        <TouchableOpacity style={styles.viewContainer} 
            key={coffeItem.id} 
            elevation={5} 
            onPress={
                () => navigation.navigate('Detail', {coffeItem: coffeItem})
            } >
            
            <Image style={styles.imageComponent}
                source={{
                    uri: coffeItem.image_for_list,
                    cache: 'only-if-cached'
                }}/>
            
            <View style={styles.viewDescription}>
                <CoffeTitle name={coffeItem.name} decaffeinated={coffeItem.decaffeinated} />
                <Text style={styles.description}>{coffeItem.short_description}</Text>
                <View>
                    <CoffeIntensity intensity={coffeItem.intensity} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.primaryPanelComponents,
      elevation: 3,
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    imageComponent: {
        width: '30%',
        height: '100%',
        minHeight: 120,
        resizeMode: 'contain',
    },
    viewDescription: {
        flex: 1,
        justifyContent: 'space-between',
        height: '90%',
        marginLeft: 10,
    },
    description: {
        color: Colors.secundaryTextColor,
        fontSize: 14,
        textTransform: 'uppercase',
    },
})
  
  export default ListViewItemCoffe;
  
  