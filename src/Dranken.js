import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalstyles } from './globalstyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Drankenscherm() {
    return (
        <View>
            <StatusBar style='light' backgroundColor='#00a1c0' />
            <ScrollView>
                <View>
                    <Text style={globalstyles.titleText}>
                    Dranken
                    </Text>

                    <Text style={globalstyles.normalText}>
                    De mens bestaat voor ongeveer 60% uit water. Je verliest vanzelf water door te plassen en zweten. Het is dus belangrijk genoeg water te drinken zodat je lichaam kan blijven functioneren. Een goed functionerend lichaam voorkomt ziekten. Daarnaast zorgt water er ook voor dat gifstoffen je lichaam sneller verlaten. Deskundigen raden aan om dagelijks 1.5 tot 2.0 liter water te drinken. 
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Water, groene thee en zwarte thee zijn de beste keuzes om water binnen te krijgen. Tot op zekere hoogte zijn ook kruidenthee en koffie goede bronnen. Dranken waar veel suiker in zit en alcohol zijn ongezonde keuzes. Alcohol bevat naast suiker geen voedingsstoffen en is daarom niet opgenomen in de schijf van 5. Mocht u toch alcohol willen drinken dan raden voedingsdeskundigen aan maximaal 1 glas alcohol per dag. 
                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}