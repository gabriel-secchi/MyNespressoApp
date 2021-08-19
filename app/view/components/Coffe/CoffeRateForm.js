
import { View } from 'native-base'
import React from 'react'
import { Button, StyleSheet, Text, TextInput } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';

const IconFA = require('react-native-vector-icons/FontAwesome').default
const IconI = require('react-native-vector-icons/Ionicons').default

import Popup from '../Popup'
import Colors from '../../../resources/colors'
import { alignItems, justifyContent, marginBottom, marginTop, paddingRight } from 'styled-system';

const ratingCompleted = (rating)  => {
    //console.log("Rating is: " + rating)
}

const CoffeRateForm = ({isVisible, setVisible, rating}) => {
    const [value, onChangeText] = React.useState('');
    const textLimit = 150

    return(
        <Popup isVisible={isVisible} setVisible={setVisible} title="Bora Avaliar!?">
            <View style={styles.panel}>
                <Text style={styles.title}>E ai, o que achou desse café?</Text>
                <Rating
                    type='star'
                    ratingCount={10}
                    fractions={0}
                    minValue={1}
                    startingValue={0}
                    imageSize={30}
                    onFinishRating={ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />
            </View>
            <View style={styles.panel}>
                <Text style={styles.title}>E a intensidade, quão forte você achou?</Text>
                <Rating
                    type='star'
                    ratingCount={10}
                    fractions={0}
                    minValue={1}
                    startingValue={0}
                    imageSize={30}
                    onFinishRating={ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />
            </View>
            <View style={styles.panel}>
                <Text style={styles.title}>Quer salvar um comentário?</Text>
                <TextInput multiline 
                    numberOfLines={4} 
                    maxLength={textLimit} 
                    value={value}
                    onChangeText={text => onChangeText(text)}
                    style={styles.comentField} />
                <Text style={styles.labelLimitText}>{value.length}/{textLimit}</Text>
            </View>
            <View style={styles.panelButtons}>
                <Button title='Salvar' onPress={() => {}} />
            </View>
        </Popup>
    )
}

const styles = StyleSheet.create({
    panel: {
        borderRadius: 4,
        padding: 15,
        paddingBottom: 10,
        backgroundColor: '#FFF',
        marginTop: 10,
        elevation: 2,
    },
    title: {
        textAlign: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#DFDFDF',
        marginBottom: 5
    },
    comentField: {
        borderColor: '#000', 
        borderWidth: 1, 
        borderRadius: 4, 
        color: '#000', 
        padding: 10,
        marginTop: 10,
        height: 100,
        textAlignVertical: 'top'
    },
    labelLimitText: {
        alignSelf: 'flex-end',
        fontSize: 10,
        paddingRight: 5,
        color: '#BBB',
        marginBottom: 10,
    },
    panelButtons: {
        alignItems: 'flex-end',
        marginTop: 10
    }
})

export default CoffeRateForm