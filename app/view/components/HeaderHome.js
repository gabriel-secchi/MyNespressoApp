
import React from 'react';
import { 
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../resources/colors';

const HeaderHome = (props) =>  {
    const [filterActive, setFilterActive] = React.useState(false);
    const [searchComponent, setSearchComponent] = React.useState(null);

    const getnameIconSearch = filterActive  ? "close" : "search1"
    
    const onPressSearch = () => {
        setFilterActive( !filterActive )
        props.onSearch("")
        setSearchComponent( filterActive == false ? searchTextInput() : null)
    }
    
    const searchTextInput = () => {
        return(
            <TextInput 
                style={styles.search} 
                autoFocus = {true}
                placeholder="O que você procura?" 
                placeholderTextColor={Colors.placeHolder}
                onChangeText={props.onSearch} />
        )
    }

    return(
        <View style={styles.header} elevation={5}>
        
            <View style={styles.panelLogo}>
                <Image style={styles.logo} source={require("../../resources/images/logo-black.png")} />
            </View>          

            <View style={styles.capsuleSearch}>
                <View style={styles.panelsearch}>
                    {searchComponent}
                    <TouchableOpacity style={{marginLeft:5}} onPress={onPressSearch}>
                    <Icon name={getnameIconSearch} size={30} color={Colors.primaryTextColor} />
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.panelIconFilter}>
                <Icon name="filter" size={30} color={Colors.primaryTextColor} />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 10,
      backgroundColor: Colors.primaryPanelComponents,
      paddingHorizontal: 15,
      paddingVertical: 20,
    },
    panelLogo:{
        flexBasis: 'auto', 
        marginRight: 12
    },
    logo: {
        maxWidth: 100, 
        maxHeight: 50, 
        resizeMode: 'contain'
    },
    capsuleSearch:{
        flexBasis: 'auto', 
        flexGrow: 2, 
        alignItems: 'flex-end'
    },
    panelsearch: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    search: {
      color: Colors.primaryTextColor,
      flexGrow: 2,
      fontSize: 18,
      borderBottomColor: Colors.borderGrayLight,
      borderBottomWidth: 2,
      paddingVertical: 8,
    },
    panelIconFilter: {
        marginLeft: 12, 
        flexBasis: 'auto'
    },
  });

export default HeaderHome