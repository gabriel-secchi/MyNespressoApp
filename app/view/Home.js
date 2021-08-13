
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'; 

import Colors from '../resources/colors';

import HeaderHome from './components/HeaderHome'
import ListViewCoffe from './components/ListViewCoffes/Listview'

const Home = ({ navigation }) => {
  const [filter, setFilter] = React.useState("")
    
  return (
    <SafeAreaView style={styles.screen}>
      <HeaderHome onSearch={setFilter} />
      <ListViewCoffe filter={filter} navigation={navigation} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryScreenBackgroundColor,
  },
})

export default Home
