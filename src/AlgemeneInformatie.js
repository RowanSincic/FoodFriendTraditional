import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalstyles } from './globalstyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function AlgemeneInformatieScherm() {
    return (
        <View>
            <StatusBar style='light' backgroundColor='#00a1c0' />
            <ScrollView>
                <View>
                    <Text style={globalstyles.titleText}>
                        Algemene informatie
                    </Text>
                    <Text style={globalstyles.normalText}>

                    Het lichaam heeft voedsel nodig om goed te kunnen werken. Elke beweging die gemaakt wordt, elke keer dat je adem haalt, het kost allemaal energie. Die energie krijg je door te eten. Naast energie zitten er ook belangrijke voedingstoffen in eten. Die voedingstoffen zorgen ervoor dat je lichaam gezond blijft. Bijvoorbeeld, mensen met een ijzer tekort kunnen extreem moe worden. Voedsel is dus ontzettend belangrijk. Maar hoe weet je nu wat je lichaam nodig heeft? 
                    </Text>

                    <Text style={globalstyles.normalText}>
De schijf van vijf kan hierbij helpen. De schijf van vijs is gemaakt om te laten zien hoe een gezond en gebalanceerd dieet eruit ziet. Het is de bedoeling dat je elke dag iets eet uit elke deel van de schijf van vijf. De schijf van vijf bestaat uit de volgende delen: koolhydraten, vetten, eiwitten, groente & fruit, en dranken. Bijvoorbeeld, een dieet van alleen maar eiwitten is dus zeer onverstandig omdat je dan veel belangrijke stoffen niet binnenkrijgt.
                    </Text>

                    <Text style={globalstyles.normalText}>
Voedingsdeskundigen raden aan om regelmatig en verspreid over de dag te eten. Elke dag ontbijten kan ervoor zorgen dat je de rest van de dag regelmatiger eet en dat je minder in verleiding wordt gebracht om ongezonde snacks te eten. 
                    </Text>

                    <Text style={globalstyles.titleText}>
                    Gezonde en ongezonde keuzes
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Wat wel en niet gezonde of ongezonde keuzes zijn hangt helemaal af van je eigen situatie. Bij ondergewicht moet je veel caloriën eten om aan te komen. Bij overgewicht is het precies andersom, dan moet je weinig caloriën eten om af te vallen. Meer informatie hierover in het aparte stukje over caloriën. Er zijn wel producten die altijd ongezond zijn.
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Producten met veel zout, verzadigde vetten en toegevoegde suikers zijn ongezonde keuzes, ongeacht jouw eigen situatie. Maar waarom zijn deze producten ongezond? In de volgende stukjes tekst gaan we dieper in op zout, verzadigde vetten en suikers.
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Het lichaam heeft zout nodig, maar je krijgt al genoeg binnen zonder extra zout te gebruiken. Teveel zout kan zorgen voor een verhoogde bloeddruk en nierschade. Producten met veel zout zijn bijvoorbeeld chips, pizza, soep in blik en kant-en-klaar maaltijden.
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Het lichaam heeft ook vetten nodig. Vetten zijn erg belangrijk omdat ze hormoonaanmaak ondersteunen en helpen bij het behoud van zenuwcellen. Onverzadigde vetten zijn gezond, verzadigde vetten en transvetten zijn ongezond. Verzadigde vetten zijn ongezond omdat ze hart- en vaatziekten, overgewicht en kanker kunnen veroorzaken. Transvetten verhogen de kans op hart- en vaatziekten.
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Suikers zijn niet per se ongezond maar zitten wel vaak in ongezonde producten. Je maakt dus gezondere keuzes door producten met veel suiker te vermijden. Voor mensen met overgewicht is het verstandig om suikers te vermijden omdat deze je even energie geven, maar je dan al snel een hongergevoel geven en daardoor blijf je eten. 
                    </Text>

                    <Text style={globalstyles.normalText}>
Veel producten die veel zout, verzadigde vetten en toegevoegde suikers bevatten zijn zwaar bewerkte producten. Bewerkte producten zijn verse producten die op een bepaalde manier zijn klaargemaakt of veranderd. Zwaar bewerkte producten zijn dus producten waar heel veel aan is veranderd. Door bewerking wordt eten ongezonder. Voorbeelden van zwaar bewerkte producten zijn: fast food, kant-en-klaar maaltijden, koek, gebak en frisdranken. Daarbij komt dat zwaar bewerkte producten ook vaak veel caloriën bevatten en weinig vitaminen en mineralen.
                    </Text>

                    <Text style={globalstyles.titleText}>
                    Voedseletiketten
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Je kunt veel informatie vinden op voedseletiketten. Bekijk ze eens om te weten te komen wat er wel en wat er niet in een product zit. En, vergelijk producten eens met elkaar om erachter te komen wat de verschillen zijn.
                    </Text>

                    <Text style={globalstyles.normalText}>
Voor uitgebreidere informatie raden wij u aan om een kijkje te nemen op de website van het voedingscentrum.

                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}