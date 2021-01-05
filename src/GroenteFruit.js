import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import { globalstyles } from './globalstyles';

export default function GroenteFruitscherm() {
    return (
        <View>
            <StatusBar style='light' backgroundColor='#00a1c0' />
            <ScrollView>
                <View>
                    <Text style={globalstyles.titleText}>
                    Groente en fruit
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Het is belangrijk om groente en fruit te eten omdat deze vitaminen, mineralen en vezels bevaten die het lichaam nodig heeft om goed te werken. Het voldoende en gevarieerd eten van groente en fruit verminderd ook de kans op vrijwel alle ziekten.
                        </Text>

                        <Text style={globalstyles.normalText}>
                        Een mango is geen broccoli, en een kiwi is geen wortel. De ene groente of fruit heeft belangrijke stoffen die de ander weer niet heeft. Het is dus belangrijk om veel verschillende groenten en fruit te eten zodat je alle vitaminen en mineralen binnenkrijgt die je nodig hebt.  
                        </Text>

                        <Text style={globalstyles.normalText}>
                        Voedingsdeskundigen raden aan om dageljiks ongeveer 250 gram groente en 2 porties fruit te eten. In totaal dus zeker meer dan 5 porties groente en fruit per dag.
                        </Text>

                        <Text style={globalstyles.normalText}>
                        Fruitsap uit de supermarkt bevat over het algemeen minder vitaminen en mineralen dan verse groenten en fruit. Daarnaast bevat fruitsap ook heel veel suiker. Daarom staan 2 glazen fruitsap gelijk aan 1 portie groente en fruit.
                        </Text>

                </View>
            </ScrollView>
        </View>
    );
}