
import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'
import CoffeTitle from './components/Coffe/CoffeTitle'
import CoffeDetailHeader from './components/Coffe/CoffeDetailHeader'
import CoffeData from './components/Coffe/CoffeData'
import Colors from '../resources/colors';


const Detail = ({ navigation, route }) => {
  const { coffeItem } = route.params;
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: <CoffeTitle name={coffeItem.name} decaffeinated={coffeItem.decaffeinated} />
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <View elevation={2} style={styles.panelInfoCoffe}>
        <CoffeDetailHeader coffeItem={coffeItem} />
        <CoffeData coffeItem={coffeItem} />
      </View>

      <ScrollView>
          <Text style={styles.coffeTextDescription}>{coffeItem.description}</Text>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryPanelComponents,
  },
  panelInfoCoffe: {
    backgroundColor: Colors.primaryPanelComponents,
    paddingTop: 10,
    paddingBottom: 50,
    elevation: 2,
  },
  coffeTextDescription: {
    textAlign: 'center',
    margin: 15,
    fontFamily: 'ArimaMadurai-Regular',
    fontSize: 18,
  },
})

export default Detail;
