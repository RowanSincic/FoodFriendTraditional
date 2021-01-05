import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { globalstyles } from './globalstyles';
import moment from 'moment';
import 'moment/locale/nl';
import { ScrollView } from 'react-native-gesture-handler';

import ActiveButton from './ActiveButton';
import InactiveButton from './InactiveButton';
import KlaarButton from './KlaarButton'

export default function InputScreen({ navigation }) { 
    const [labelMode, setLabelMode] = useState(true);

    moment.locale('nl');

    let key = moment().valueOf().toString(); //UNIX timestamp
    let datum = moment().format('DD MMMM YYYY     k[:]mm').toString();
    let today = moment().format('DD MMMM YYYY').toString();
    let readableTimestamp = moment().format('k[:]mm').toString();

    let entry = [{
        nametag: '',
        date: '',
        today: '',
        readableTimestamp: '',
        calorien: 0,
        koolhydraten: 0,
        vetten: 0,
        eiwitten: 0,
        gram: 0,
        key: '',
    }]

    entry.nametag = '';
    entry.koolhydraten = 0;
    entry.vetten = 0;
    entry.eiwitten = 0;
    entry.key = key;
    entry.gram = 0;

    function toggleMode() {
        setLabelMode(prevState => !prevState);
    }

    function calorieCalculator(koolhydraten, vetten, eiwitten) {
        entry.calorien = Math.round(koolhydraten*4 + vetten*9 + eiwitten*4);
    }

    function calorieCalculator2(koolhydraten, vetten, eiwitten, gram) {
        entry.koolhydraten = koolhydraten*(entry.gram/100);
        entry.eiwitten = eiwitten*(entry.gram/100);
        entry.vetten = eiwitten*(entry.gram/100);
        entry.calorien = Math.round(entry.koolhydraten*4 + entry.vetten*9 + entry.eiwitten*4);
    }

    function dateSetter(date) {
        entry.date = date;
        entry.date.trim(); // doesnt do shit lol
        entry.today = today;
        entry.readableTimestamp = readableTimestamp;
    }

    function EntryChecker() {
        if(entry.koolhydraten == 0 && entry.vetten == 0 && entry.eiwitten == 0 && entry.nametag.valueOf() === '')
        {
            navigation.navigate('Bijhouden');
        }
        else {
            calorieCalculator(entry.koolhydraten, entry.vetten, entry.eiwitten);
                dateSetter(datum);
                navigation.navigate('Bijhouden', {entry: entry});
        }
    }

    function EntryChecker2() {
        if(entry.koolhydraten == 0 && entry.vetten == 0 && entry.eiwitten == 0 && entry.nametag.valueOf() === '' && entry.gram == 0)
        {
            navigation.navigate('Bijhouden');
        }
        else {
            calorieCalculator2(entry.koolhydraten, entry.vetten, entry.eiwitten, entry.gram);
                dateSetter(datum);
                navigation.navigate('Bijhouden', {entry: entry});
        }
    }

    if(labelMode)
    {
    return(
        <View style={{flex: 1}}>
            <StatusBar style='light' backgroundColor='#00a1c0' />

        
        <ScrollView style={{flex:1}}>

            
            <View>
                <Text style={globalstyles.normalText}>Wat heb je gegeten?</Text>

                <View style={{flexDirection: 'row', alignContent: 'center', alignSelf: 'center', justifyContent: 'center'}}>
                    <TextInput style={styles.inputfieldLong}
            onChangeText={(value) => entry.nametag = value}
            keyboardType={"default"}
            placeholder={'Bijvoorbeeld: banaan'}
                        />
            </View>
            </View>

            <View>
                    <Text style={globalstyles.normalText}>Wat zat er in?</Text>
            
                    <View style={{flexDirection: 'row'}}>
                        <TextInput style={styles.inputfield}
            onChangeText={(value) => entry.koolhydraten = parseInt(value)}
            keyboardType={"numeric"}
            />
                        <Text style={{flex: 1, padding: 8, alignContent: 'center', color: '#424242'}}>Gram koolhydraten</Text>
                    </View>
                    </View>

                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.inputfield}
            onChangeText={(value) => entry.vetten = parseInt(value)}
            keyboardType={"numeric"}
            />
                     <Text style={{flex: 1, padding: 8, alignContent: 'center', color: '#424242'}}>Gram vetten</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.inputfield}
            onChangeText={(value) => entry.eiwitten = parseInt(value)}
            keyboardType={"numeric"}
            />
                    <Text style={{flex: 1, padding: 8, alignContent: 'center', color: '#424242'}}>Gram eiwitten</Text>
                </View>

        </ScrollView>

                <KlaarButton onPress={EntryChecker}/>

<InactiveButton onPress={toggleMode}/>
        

</View>

        
    )
    }
    if(!labelMode){
        return(
            <View>
                <ScrollView>

                <View>
                <Text style={globalstyles.normalText}>Wat heb je gegeten?</Text>

                <View style={{flexDirection: 'row', alignContent: 'center', alignSelf: 'center', justifyContent: 'center'}}>
                    <TextInput style={styles.inputfieldLong}
            onChangeText={(value) => entry.nametag = value}
            keyboardType={"default"}
            placeholder={'Bijvoorbeeld: banaan'}
                        />
            </View>
            </View>

            <View>
                <Text style={globalstyles.normalText}>Hoeveel gram woog het?</Text>

                <View style={{flexDirection: 'row', alignContent: 'center', alignSelf: 'center', justifyContent: 'center'}}>
                    <TextInput style={styles.inputfield}
            onChangeText={(value) => entry.gram = value}
            keyboardType={"default"}
                        />
                        <Text style={{flex: 1, padding: 8, alignContent: 'center', color: '#424242'}}>Gram</Text>
            </View>
            </View>

            <View>
                    <Text style={globalstyles.normalText}>Wat waren de voedingswaarde per 100 gram product volgens het voedsel etiket?</Text>
            
                    <View style={{flexDirection: 'row'}}>
                        <TextInput style={styles.inputfield}
            onChangeText={(value) => entry.koolhydraten = parseInt(value)}
            keyboardType={"numeric"}
            />
                        <Text style={{flex: 1, padding: 8, alignContent: 'center', justifyContent: 'center', color: '#424242', marginBottom: 4}}>Gram koolhydraten per 100 gram product</Text>
                    </View>
                    </View>

                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.inputfield}
            onChangeText={(value) => entry.vetten = parseInt(value)}
            keyboardType={"numeric"}
            />
                     <Text style={{flex: 1, padding: 8, alignContent: 'center', justifyContent: 'center', color: '#424242', marginBottom: 4}}>Gram vetten per 100 gram product</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.inputfield}
            onChangeText={(value) => entry.eiwitten = parseInt(value)}
            keyboardType={"numeric"}
            />
                    <Text style={{flex: 1, padding: 8, alignContent: 'center', justifyContent: 'center', color: '#424242', marginBottom: 4}}>Gram eiwitten per 100 gram product</Text>
                </View>

                </ScrollView>

<View>
                <KlaarButton onPress={EntryChecker2}/>

                <ActiveButton onPress={toggleMode}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputfield: {
        borderWidth: 2, 
        borderColor: '#757575',
        marginLeft: Dimensions.get('window').width*0.075,
        marginRight: Dimensions.get('window').width*0.075,
        marginTop: 8,
        padding: 4,
        width: Dimensions.get('window').width*0.28,
        height: Dimensions.get('window').height*0.038
    },
    inputfieldLong: {
        borderWidth: 2, 
        borderColor: '#757575',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
        padding: 4,
        width: Dimensions.get('window').width*0.85,
        height: Dimensions.get('window').height*0.038
    }
});