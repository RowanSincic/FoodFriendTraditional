import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ActiveButton({ onPress }) {
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
                  name='exchange' size={30} color='black' color='black' />
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
            backgroundColor: 'white',
            marginRight: 16,
            marginBottom: 16,
            marginTop: 16,
            marginLeft: 16,
            alignItems: "center",
            justifyContent: "center",
            borderColor: 'black',
            borderWidth: 2,
    },
    buttontext: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        textAlign: 'center'
    }
})