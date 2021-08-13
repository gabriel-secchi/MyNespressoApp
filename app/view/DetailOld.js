
import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';

import { HeaderBackground } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/AntDesign'
import CoffeTitle from './components/Coffe/CoffeTitle'
import CoffeData from './components/Coffe/CoffeData'
import Colors from '../resources/colors';


const DetailOld = ({ navigation, route }) => {
  const { coffeItem } = route.params;
  const coffeColor = coffeItem.color || Colors.noCoffeColor
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: <CoffeTitle name={coffeItem.name} decaffeinated={coffeItem.decaffeinated} />,
      headerTransparent: true,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.screen, {backgroundColor: coffeColor}]}>
      <View style={styles.panelTop}>
        <View style={styles.panelIconRate}>
          <TouchableOpacity style={styles.buttonRate}>
            <Icon name="hearto" size={30} color={Colors.primaryTextColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.panelImage}>
          <Image style={styles.imageComponent}
                source={{ uri: coffeItem.image_for_list }}/>
        </View>
      </View>
      <CoffeData coffeItem={coffeItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //backgroundColor: Colors.primaryPanelComponents,
    paddingTop: 55,
  },
  panelTop: {
    marginBottom: 30,
  },
  panelIconRate: {
    alignItems: 'flex-end', 
    paddingTop: 10, 
    paddingRight: 15
  },
  buttonRate: {
    borderRadius: 25, 
    paddingTop: 2, 
    paddingHorizontal: 2
  },
  panelImage: {
    alignItems: 'center',
    paddingBottom: 10
  },
  imageComponent: {
    width: '50%',
    //height: '100%',
    minHeight: 150,
    resizeMode: 'contain',
  },
})

export default DetailOld;
