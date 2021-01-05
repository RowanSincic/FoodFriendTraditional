import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalstyles } from './globalstyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function EiwittenNotenZuivel() {
    return (
        <View>
            <StatusBar style='light' backgroundColor='#00a1c0' />
            <ScrollView>
                <View>
                    <Text style={globalstyles.titleText}>
                    Eiwitten
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Vis, peulvruchten, vlees en ei zijn rijk aan eiwitten. Eiwitten zijn erg belangrijk voor het lichaam. Ze helpen met het behoud en de groei van spieren en gaan infecties tegen. 
                        </Text>


                        <Text style={globalstyles.normalText}>
                        Gezond eten met veel eiwitten erin zijn bijvoorbeeld (vette) vis, schaal- en schelpdieren, bonen, linzen, noten, (onbewerkt) vlees, tofu, tempé en eieren. 
                        </Text>

                        <Text style={globalstyles.normalText}>
                        Eiwitten kunnen verdeeld worden in plantaardige eiwitten en dierlijke eiwitten. Plantaardige eiwitten kun je bijvoorbeeld vinden in bonen, linzen en noten. Dierlijke eiwitten kun je bijvoorbeeld vinden in vlees, vis, ei en zuivel. Het is aanbevolen om eiwitten te eten van beide groepen. Dit is omdat er in beide groepen voedingsstoffen zitten die de andere groep niet heeft. Gevarieerd eten is dus erg belangrijk.
                        </Text>

                        <Text style={globalstyles.normalText}>
                        In de stukjes hieronder wordt dieper ingegaan op noten en zuivel.
                        </Text>

                        <Text style={globalstyles.titleText}>
                        Noten
                        </Text>

                        <Text style={globalstyles.normalText}>
                        Noten bevatten veel onverzadigde vetten en kunnen daarom veel energie leveren. Omdat er zoveel energie in nootjes zitten is het niet nodig om veel nootjes te eten. Een handjevol per dag verlaagd al de kans op hart- en vaatziekten. Goede opties zijn ongezouten nootjes en pindakaas van 100% noten of pinda's. Minder gezonde opties zijn gezouten nootjes, nootjes met toegevoegde chocola of suiker en borrelnootjes.
                        </Text>

                        <Text style={globalstyles.titleText}>
                        Zuivel
                        </Text>

                        <Text style={globalstyles.normalText}>
                        Kaas, melk, kwark en yoghurt. Zuivel is populair in Nederland en is een goede bron van eiwitten, vitaminen en mineralen. Elke type zuivelproduct bevat eigenlijk verzadigde (slechte) vetten. De meest gezonde zuivelproducten zijn magere zuivelproducten met weinig toegevoegde suikers. Magere zuivelproducten bevatten minder verzadigde (slechte) vetten. Kaas is over het algemeen minder gezond omdat deze vaak veel zout en verzadigde vetten bevatten. 
                        </Text>

                </View>
            </ScrollView>
        </View>
    );
}