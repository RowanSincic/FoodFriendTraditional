import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useContext } from 'reactn';
import moment from 'moment';
import 'moment/locale/nl';
import { AppContext } from './src/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AlgemeneInformatie from './src/AlgemeneInformatie';
import Calorienscherm from './src/Calorien';
import Drankenscherm from './src/Dranken';
import GroenteFruitscherm from './src/GroenteFruit';
import Koolhydratenscherm from './src/Koolhydraten';
import Vettenscherm from './src/Vetten';
import Camerascreen from './src/Camerascreen';
import InformatieTabscreen from './src/InformatieTabscreen';
import EiwittenNotenZuive from './src/EiwittenNotenZuivel';
import InputScreen from './src/Input';
import AboutScreen from './src/About';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

//reactnative.dev website

// Homescreen with tabbar. See tabscreen / tabscreen2 etc below for the respective screens
function HomeScreen() {

  return (
    <Tabbar />
  );
}

function TabScreen({ navigation, route }) {
 // const [foodentry, setFoodentry] = useState([]); 
 const [foodentry, setFoodentry] = useContext(AppContext);

  React.useEffect(() => {
    if (route.params?.entry) {
      // new entry, do something with `route.params.entry`
      setFoodentry(oldState => [route.params?.entry, ...oldState]);
      console.log(foodentry[0]);
}
  }, [route.params?.entry] );

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(foodentry)
      await AsyncStorage.setItem('foodentrydata', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('foodentrydata')
      data = JSON.parse(jsonValue)
      // console.log(data)
      // console.log(data[0][0])
      setFoodentry([data[0][0]])
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(e)
    }
  }

  function deleteHandler(key) {
    setFoodentry(oldState => oldState.filter(entry => entry.key != key))
    storeData()
  }


let today = moment().format('DD MMMM YYYY').toString();  

let koolhydratenTotaal = 0;
let vettenTotaal = 0;
let eiwittenTotaal = 0;
let calorienTotaal = 0;

foodentry.forEach((item) => {if(today == item.today) return (koolhydratenTotaal += item.koolhydraten)});
foodentry.forEach((item) => {if(today == item.today) return (vettenTotaal += item.vetten)});
foodentry.forEach((item) => {if(today == item.today) return (eiwittenTotaal += item.eiwitten)});
foodentry.forEach((item) => {if(today == item.today) return (calorienTotaal += item.calorien)});

function TodayOrNotToday(item) {
  if (item.today == today) return (
  <Text style={{fontWeight: 'bold', alignSelf: 'flex-end'}}>vandaag  {item.readableTimestamp}</Text>
  )
  if (item.today != today) return (
  <Text style={{fontWeight: 'bold', alignSelf: 'flex-end'}}>{item.date}</Text>
  )}

  return (
    <View style={{ flex: 1 }}>
      <View>
      <StatusBar style='light' backgroundColor='#00a1c0' />
      </View>

      <Button title='data 1' onPress={() => setFoodentry(prevState => [{nametag: 'data 1', calorien: 10, koolhydraten: 1, vetten: 2, eiwitten: 3, date: moment().format('DD MMMM YYYY     k[:]mm').toString(), today: moment().format('DD MMMM YYYY').toString(), readableTimestamp: '12:34', key: foodentry.length.toString()}, ...prevState])}/>
      <Button title='data 2' onPress={() => setFoodentry(prevState => [{nametag: 'data 2', calorien: 10, koolhydraten: 4, vetten: 5, eiwitten: 6, date: '01 December 2020', today: '01 December 2020', readableTimestamp: '12:34', key: foodentry.length.toString()}, ...prevState])}/>
      <Button title='get data test' onPress={() => getData()} />
      <Button title='store data test' onPress={() => storeData()}/>
      
      <View style={{
      alignContent: 'center',
      alignSelf: 'center',
      marginTop: 8,
      marginBottom: 8,
      borderWidth: 2, 
      borderColor: '#555555', 
      padding: 8,
      width: Dimensions.get('window').width*0.95,}}>

<View style={{flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold', color: '#424242'}}>Overzicht</Text>
        <Text style={{fontWeight: 'bold', alignSelf: 'flex-end', color: '#424242'}}>vandaag</Text>
        </View>
        <Text style={{color: '#424242'}}>caloriën totaal: {`\t \t \t \t \t \t \t`}{calorienTotaal}{`\t`}kcal</Text>
      <Text style={{color: '#424242'}}>koolhydraten totaal: {`\t \t`}{koolhydratenTotaal} {`\t`}gram</Text>
      <Text style={{color: '#424242'}}>vetten totaal: {`\t \t \t \t \t \t \t \t`}{vettenTotaal} {`\t`}gram</Text>
      <Text style={{color: '#424242'}}>eiwitten totaal: {`\t \t \t \t \t \t \t`}{eiwittenTotaal} {`\t`}gram </Text>
      </View>

        <View style={{marign: 8, flex: 1, alignItems: 'center', padding: 8}}>
        <FlatList data={foodentry} keyExtractor={(item) => item.key} renderItem={({ item }) => {
        return (
          <TouchableWithoutFeedback onPress={() => {Alert.alert('Verwijderen', 'Weet u zeker dat u dit item wilt verwijderen?', [
            {text: 'Ja', onPress: () => deleteHandler(item.key)},
            {text: 'Nee'}
          ])}}>
          <View style={{alignContent: 'center',
          alignSelf: 'center', 
          margintop: 8,
          marginleft: 8,
          marginBottom: 8,
          borderWidth: 2, 
          padding: 8,
          borderColor: '#555555', 
          width: Dimensions.get('window').width*0.95,
          flex: 1, 
          }}
          >
            
            <View style={{flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', color: '#424242'}}>{item.nametag}</Text>
            <Text style={{fontWeight: 'bold', alignSelf: 'flex-end', color: '#424242'}}>{TodayOrNotToday(item)}</Text>
            </View>
            <Text style={{color: '#424242'}}>Caloriën: {`\t \t \t \t \t \t \t \t \t \t \t \t`}{item.calorien}{`\t`}kcal</Text>
            <Text style={{color: '#424242'}}>koolydraten: {`\t \t \t \t \t \t \t \t \t`}{item.koolhydraten} {`\t`}gram </Text>
            <Text style={{color: '#424242'}}>vetten: {`\t \t \t \t \t \t \t \t \t \t \t \t \t \t`}{item.vetten} {`\t`}gram </Text>
            <Text style={{color: '#424242'}}>Eiwitten: {`\t \t \t \t \t \t \t \t \t \t \t \t`}{item.eiwitten} {`\t`}gram</Text>
            
          </View>
          </TouchableWithoutFeedback>
        )
      }}></FlatList>
      </View>


      {/* go to data input screen button component */}
      <View style={{
        alignSelf: "flex-end",
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
        bottom: 16,

        // flexDirection: "row-reverse",
        position: "absolute",
      }}>
         <TouchableOpacity style={{
          justifyContent: "flex-end",
        }}
          onPress={() => navigation.navigate('InputScreen')}
        >
          <View style={{
            width: Dimensions.get('window').width * 0.15,
            height: Dimensions.get('window').width * 0.15,
            borderRadius: Dimensions.get('window').width * 0.15 / 2,
            backgroundColor: '#db4e46',
            marginRight: 16,
            marginBottom: 16,
            marginTop: 16,
            marginLeft: 16,
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Entypo style={{
              paddingBottom: 3
            }}
              name='plus' size={30} color='#555555' color='#FFF' />
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

// tabscreen2. check informatiescherm.js for the entire screen
function TabScreen2() {
  return (
    <InformatieTabscreen />
  )
}

function TabScreenOverzicht() {
  const [foodentry, setFoodentry] = useContext(AppContext);
  const overzichtArray = [];

  let overzichtObject = {
    today: '',
    calorien: 0,
    koolhydraten: 0,
    vetten: 0,
    eiwitten: 0,
    key: '',
}

  let key = moment().valueOf().toString(); //UNIX timestamp 

  overzichtObject.koolhydraten = 0;
  overzichtObject.vetten = 0;
  overzichtObject.eiwitten = 0;
  overzichtObject.calorien = 0;
  overzichtObject.today= '';
  overzichtObject.key = key;

  let iterationCounter = 1;
  let previousItemToday = '';

  if (foodentry.length >= 1) {
    previousItemToday = (foodentry[0].today)
  }

  foodentry.forEach((item) => {

  if (foodentry.length == 0) {
    return (
      null
    )
  }
  else if (previousItemToday.valueOf() === item.today.valueOf()) {
    if(foodentry.length == iterationCounter) {
      return (
        overzichtObject.koolhydraten += item.koolhydraten,
          overzichtObject.vetten += item.vetten,
          overzichtObject.eiwitten += item.eiwitten,
          overzichtObject.calorien += item.calorien,
          overzichtObject.today = item.today,
          overzichtObject.key = item.key,
        overzichtArray.push(JSON.parse(JSON.stringify(overzichtObject))),
        iterationCounter = 1
      )
    }
    else if(foodentry.length > iterationCounter) {
      return (
        overzichtObject.koolhydraten += item.koolhydraten, 
        overzichtObject.vetten += item.vetten, 
        overzichtObject.eiwitten += item.eiwitten,
        overzichtObject.calorien += item.calorien,
        overzichtObject.today = item.today,
        overzichtObject.key = item.key,
        iterationCounter += 1
      )
    }
  }
  else if (previousItemToday.valueOf() !== item.today.valueOf()) {
     overzichtArray.push(JSON.parse(JSON.stringify(overzichtObject)))
    if(foodentry.length == iterationCounter && foodentry.length > 1) {
      return (
        previousItemToday = item.today,
      overzichtObject.koolhydraten = item.koolhydraten,
        overzichtObject.vetten = item.vetten,
        overzichtObject.eiwitten = item.eiwitten,
        overzichtObject.calorien = item.calorien,
        overzichtObject.today = item.today,
        overzichtObject.key = item.key,
      overzichtArray.push(JSON.parse(JSON.stringify(overzichtObject))),
      iterationCounter = 1
      )
    }
    else if(foodentry.length > iterationCounter) {
      return (
        previousItemToday = item.today,
        overzichtObject.koolhydraten = item.koolhydraten,
        overzichtObject.vetten = item.vetten,
        overzichtObject.eiwitten = item.eiwitten,
        overzichtObject.calorien = item.calorien,
        overzichtObject.today = item.today,
        overzichtObject.key = item.key,
        iterationCounter += 1
      )
    }
  }});

  function IfOverzichtEmpty() {
    if(foodentry.length == 0)
    return (
      <Text style={{fontStyle: 'normal',
      color: '#757575',
      marginTop: 24,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 20,
      lineHeight: 34,
      fontSize: 14,
      textAlign: 'center'}}>
        Het overzicht is op dit moment leeg. Het overzicht wordt vanzelf gevuld wanneer u items toevoegd.</Text>
    )
  }

  return (
    <View style={{flex: 1}}>
      <View>
      <StatusBar style='light' backgroundColor='#00a1c0' />
      </View>

      <View>
          {IfOverzichtEmpty()}
      </View>

      <View></View>

      <View style={{marign: 8, flex: 1, alignItems: 'center', padding: 8}}>
        <FlatList data={overzichtArray} renderItem={({ item }) => {
        return (
          <View style={{alignContent: 'center',
          alignSelf: 'center', 
          margintop: 8,
          marginleft: 8,
          marginBottom: 8,
          borderWidth: 2, 
          padding: 8,
          borderColor: '#555555', 
          width: Dimensions.get('window').width*0.95,
          flex: 1, 
          }}
          >
            
            <View style={{flexDirection: 'row', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
            <Text style={{fontWeight: 'bold', alignSelf: 'flex-end', color: '#424242'}}>{item.today}</Text>
            </View>
            <Text style={{color: '#424242'}}>Caloriën: {`\t \t \t \t \t \t \t \t \t \t \t \t`}{item.calorien}{`\t`}kcal</Text>
            <Text style={{color: '#424242'}}>koolydraten: {`\t \t \t \t \t \t \t \t \t`}{item.koolhydraten} {`\t`}gram </Text>
            <Text style={{color: '#424242'}}>vetten: {`\t \t \t \t \t \t \t \t \t \t \t \t \t \t`}{item.vetten} {`\t`}gram </Text>
            <Text style={{color: '#424242'}}>Eiwitten: {`\t \t \t \t \t \t \t \t \t \t \t \t`}{item.eiwitten} {`\t`}gram</Text>
            
          </View>
        )
      }}></FlatList>
      </View>

    </View>
  )
}

// tabbar with styling
function Tabbar() {
  return (
    <Tabfix.Navigator tabBarPosition='top'
      tabBarOptions={{
        activeTintColor: '#FFF',
        style: { backgroundColor: '#46c0db' },
        indicatorStyle: { backgroundColor: "#FFF" },
      }}>
      <Tabfix.Screen name='Bijhouden' component={TabScreen} />
      <Tabfix.Screen name='Overzicht' component={TabScreenOverzicht} />
      <Tabfix.Screen name='Informatie' component={TabScreen2} />
    </Tabfix.Navigator>
  );
}

const Tabfix = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [foodentry, setFoodentry] = useState([]); 

  moment.locale('nl');

  return (
    <AppContext.Provider value={[foodentry, setFoodentry]}>
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{
          title: 'FoodFriend',
          headerStyle: {
            backgroundColor: '#46c0db',
            elevation: 0,
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <AntDesign name='pluscircle' size={28} style={{ padding: 16}}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="Home" component={HomeScreen} />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}> 
                <AntDesign name='pluscircle' size={28} style={{ padding: 16 }}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="Algemene informatie" component={AlgemeneInformatie} />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <AntDesign name='pluscircle' size={28} style={{ padding: 16 }}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="Eiwitten, noten en zuivel" component={EiwittenNotenZuive} />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <AntDesign name='pluscircle' size={28} style={{ padding: 16 }}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="Caloriën" component={Calorienscherm} />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <AntDesign name='pluscircle' size={28} style={{ padding: 16 }}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="Dranken" component={Drankenscherm} />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <AntDesign name='pluscircle' size={28} style={{ padding: 16 }}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="Groente en fruit" component={GroenteFruitscherm} />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <AntDesign name='pluscircle' size={28} style={{ padding: 16 }}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="Koolhydraten" component={Koolhydratenscherm} />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <AntDesign name='pluscircle' size={28} style={{ padding: 16 }}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="Vetten" component={Vettenscherm} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="camera" component={Camerascreen} />
          <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <AntDesign name='pluscircle' size={28} style={{ padding: 16 }}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="About" component={AboutScreen} />
          <Stack.Screen
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <AntDesign name='pluscircle' size={28} style={{ padding: 16 }}
                  onPress={() => navigation.navigate('InputScreen')}
                  color="#fff"
                />
                <Entypo name='help-with-circle' size={28} style={{padding: 16}}
                onPress={() => navigation.navigate('About')}
                color="#fff"
                />
                </View>
              ),
            }
          }}
          name="InputScreen" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homescreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  textInformationButton: {
    textAlign: 'center',
    flex: 20,
    textAlignVertical: 'center',
    paddingRight: 92
  },
  iconInformationButton: {
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 4,
  }
});
