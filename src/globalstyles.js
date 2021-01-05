import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export const globalstyles = StyleSheet.create({
    container: {
        padding: 40,
    },
    normalText: {
        fontStyle: 'normal',
        color: '#757575',
        marginTop: 24,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 20,
        lineHeight: 34,
        fontSize: 20,
        textAlign: 'left'
    },
    titleText: {
        fontStyle: 'normal',
        color: '#757575',
        fontSize: 32,
        marginTop: 24,
        marginLeft: 16,
        marginRight: 16,
        lineHeight: 24,
        paddingTop: 24,
        textAlign: 'left'
    },
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
})