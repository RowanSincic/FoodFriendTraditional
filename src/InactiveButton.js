import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function InactiveButton({ onPress }) {
    return (
        <View style={{
            alignSelf: "flex-start",
            flexDirection: "row-reverse",
            justifyContent: "flex-start",
            bottom: 16,
            position: "relative" 
        }}>

            <TouchableOpacity style={{justifyContent: 'flex-end'}}
            onPress={onPress}>
                <View style={styles.button}>
                <FontAwesome style={{
                  paddingBottom: 3
                }}
                  name='exchange' size={30} color='white' color='#FFF' />
                </View>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width * 0.15,
            height: Dimensions.get('window').width * 0.15,
            borderRadius: Dimensions.get('window').width * 0.15 / 2,
            backgroundColor: 'black',
            marginRight: 16,
            marginBottom: 16,
            marginTop: 16,
            marginLeft: 16,
            alignItems: "center",
            justifyContent: "center",
            borderColor: 'grey',
            borderWidth: 0,
    },
    buttontext: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        textAlign: 'center'
    }
})



