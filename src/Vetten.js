import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalstyles } from './globalstyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Vettemscherm() {
    return (
        <View>
            <StatusBar style='light' backgroundColor='#00a1c0' />
            <ScrollView>
                <View>
                    <Text style={globalstyles.titleText}>
                    Vetten
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Vet is een bron van energie en een belangrijke bouwstof voor het lichaam. Vet helpt bij het aanmaken van hormonen en onderhoudt de zenuwen en hersenen. Het is daarom belangrijk genoeg vetten binnen te krijgen. 
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Vetten kunnen verdeeld worden in drie groepen. Dit zijn: onverzadigde vetten, transvetten en verzadigde vetten. Onverzadigde vetten zijn gezonde vetten. Transvetten en verzadigde vetten zijn ongezonde vetten. Ze zijn ongezond omdat ze hart- en vaatziekten, overgewicht en kanker kunnen veroorzaken. Het is niet heel erg om een keer verzadigde vetten of transvetten te eten, maar probeer het te beperken. 
                        </Text>

                        <Text style={globalstyles.normalText}>
                        Onverzadigde vetten (gezond) kun je bijvoorbeeld vinden in vette vis (zoals zalm, haring of makreel), zonnebloemolie, lijnzaadolie, olijfolie, koolzaadolie, halvarine, margarine, avocado's, en noten. 
                        </Text>

                        <Text style={globalstyles.normalText}>
                        Verzadigde vetten en transvetten (ongezond) zitten vaak in verwerkt voedsel zoals kaas, worst, vet vlees, koeken, gebak, snoep, en snacks zoals patat en bitterballen. Verzadigde vetten zitten ook in zuivel producten. Hoe magerder het zuivelproduct, hoe minder verzadigde vetten erin zitten.
                        </Text>

                        <Text style={globalstyles.normalText}>
                        Kijk eens op de voedseletiketten van de producten die je gebruikt om te zien wat voor vetten er precies in zitten. Vergelijk de producten die je normaal koopt ook eens met alternatieven.
                        </Text>

                </View>
            </ScrollView>
        </View>
    );
}