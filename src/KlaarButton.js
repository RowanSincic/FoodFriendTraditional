import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function KlaarButton({ onPress }) {
    return (
        <View style={{
            alignSelf: "flex-end",
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
            bottom: 16,
            position: "absolute" 
        }}>

            <TouchableOpacity style={{justifyContent: 'flex-end'}}
            onPress={onPress}>
                <View style={styles.button}>
                <Entypo style={{
                  paddingBottom: 3
                }}
                  name='check' size={30} color='white' color='#FFF' />
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
            backgroundColor: '#46db61',
            marginRight: 16,
            marginBottom: 16,
            marginTop: 16,
            marginLeft: 16,
            alignItems: "center",
            justifyContent: "center",
    },
    buttontext: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        textAlign: 'center'
    }
})
