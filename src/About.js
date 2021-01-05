import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalstyles } from './globalstyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function AboutScreen() {
    return (
        <View>
                    <StatusBar style='light' backgroundColor='#00a1c0' />
            <ScrollView>

        <Text style={globalstyles.titleText}>
            Hulp en Informatie
        </Text>

        <Text style={globalstyles.normalText}>
            Hallo! Ontzettend bedankt voor het meedoen met het onderzoek!
        </Text>

        <Text style={globalstyles.normalText}> 
            Bij vragen of problemen met de app kunt u contact opnemen met Rowan Sincic op het volgende emailadres: rowan.sincic@gmail.com 
        </Text>

        <Text style={globalstyles.normalText}> 
            Deze app is ontwikkeld op de Utrecht University als onderdeel van het afstudeerproject van Rowan Sincic van de opleiding 'Business Informatics'
        </Text>
        </ScrollView>
        </View>
    )
}