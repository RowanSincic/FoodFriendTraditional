import React, { Component, useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalstyles } from './globalstyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Calorienscherm({ navigation }) {
    const [text, setText] = useState('');

    return (
        <View>
            <StatusBar style='light' backgroundColor='#00a1c0' />
            <ScrollView>
                <View>
                    <Text style={globalstyles.titleText}>
                    Caloriën
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Je lichaam heeft energie nodig zodat je kunt blijven bewegen, lopen, nadenken en dat je hart blijft kloppen. In alles wat je eet of drinkt zit energie. Deze energie wordt vaak uitgedrukt in kilo-caloriën (kcal). Hoeveel kilo-caloriën je nodig hebt verschilt op basis van je geslacht, leeftijd, lengte, hoe actief je bent en andere factoren. Volwassen vrouwen hebben ongeveer 2000 kilo-caloriën nodig. Volwassen mannen hebben ongeveer 2500 kilo-caloriën nodig. Hoeveel kilo-caloriën je echt nodig hebt is dus lastig te zeggen en hangt af van veel factoren. Hoeveel je nodig hebt zal ook per dag verschillen. 
                    </Text>

                    <Text style={globalstyles.normalText}>
                    De grootste bronnen van caloriën zijn koolhydraten, vetten en eiwitten. Deze voedingstoffen leveren veel energie. Teveel energie wordt opgeslagen als vet in het lichaam waardoor je dus dikker wordt. Als er te weinig energie in het lichaam komt dan zal het lichaam vet gaan verbranden om dit op te vangen. Hierdoor wordt je dus dunner. 
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Elke gram koolhydraat (inclusief suiker) en eiwit levert 4 kilo-caloriën, terwijl elke gram vet 9 kilo-caloriën levert. Elke gram vezel levert 2 kilo-caloriën, en elke gram alcohol levert 7 kilo-caloriën.
                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}