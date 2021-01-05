import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { globalstyles } from './globalstyles';
import { Assets } from '@react-navigation/stack';


export default function InformatieTabscreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style='light' backgroundColor='#00a1c0' />
            <ScrollView>
                <View>
                    <Text style={globalstyles.normalText}>De schijf van vijf is afgestemt op de gemiddelde gezonde nederlander.
                    Scroll naar onderen en klik op een van de onderwerpen om meer te weten te komen.
                    Raadpleeg bij problemen altijd een deskundige.
                </Text>
                </View>

                <View style={{
                    height: 310,
                }}>
                    <Image source={require('../assets/SchijfvanVijfLarge.jpg')}
                        style={{
                            borderColor: '#555555',
                            borderWidth: 1,
                            marginRight: 10,
                            marginLeft: 10,
                            marginBottom: 8,
                            flex: 1,
                            resizeMode: 'contain',
                            width: null
                        }}
                    />
                </View>

                {/* algemene informatie */}
                <View style={{
                    marginTop: 16,
                }}>
                    <TouchableOpacity style={{
                        alignItems: "center",
                    }}
                        onPress={() => navigation.navigate('Algemene informatie')}>
                        <View style={{
                            height: Dimensions.get('window').height / 9.5,
                            width: Dimensions.get('window').width * 0.95,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#555555',
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                backgroundColor: '#7a7a7a',
                                flex: 1,
                            }}>

                            </View>
                            <Text style={styles.textInformationButton}>
                                Algemene informatie</Text>
                            <AntDesign style={styles.iconInformationButton} name='right' size={32} color='#555555' />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Groente en Fruit */}
                <View style={{
                    marginTop: 8,
                }}>
                    <TouchableOpacity style={{
                        alignItems: "center",
                    }}
                        onPress={() => navigation.navigate('Groente en fruit')}>
                        <View style={{
                            height: Dimensions.get('window').height / 9.5,
                            width: Dimensions.get('window').width * 0.95,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#555555',
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                backgroundColor: '#41962a',
                                flex: 1,
                            }}>

                            </View>
                            <Text style={styles.textInformationButton}>
                                Groente en fruit</Text>
                            <AntDesign style={styles.iconInformationButton} name='right' size={32} color='#555555' />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Vetten */}
                <View style={{
                    marginTop: 8,
                }}>
                    <TouchableOpacity style={{
                        alignItems: "center",
                    }}
                        onPress={() => navigation.navigate('Vetten')}>
                        <View style={{
                            height: Dimensions.get('window').height / 9.5,
                            width: Dimensions.get('window').width * 0.95,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#555555',
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                backgroundColor: '#fcd256',
                                flex: 1,
                            }}>

                            </View>
                            <Text style={styles.textInformationButton}>
                                Vetten</Text>
                            <AntDesign style={styles.iconInformationButton} name='right' size={32} color='#555555' />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Eiwitten, noten en zuivel */}
                <View style={{
                    marginTop: 8,
                }}>
                    <TouchableOpacity style={{
                        alignItems: "center",
                    }}
                        onPress={() => navigation.navigate('Eiwitten, noten en zuivel')}>
                        <View style={{
                            height: Dimensions.get('window').height / 9.5,
                            width: Dimensions.get('window').width * 0.95,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#555555',
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                backgroundColor: '#e887e5',
                                flex: 1,
                            }}>

                            </View>
                            <Text style={styles.textInformationButton}>
                                Eiwitten, noten en zuivel</Text>
                            <AntDesign style={styles.iconInformationButton} name='right' size={32} color='#555555' />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Koolhydraten */}
                <View style={{
                    marginTop: 8,
                }}>
                    <TouchableOpacity style={{
                        alignItems: "center",
                    }}
                        onPress={() => navigation.navigate('Koolhydraten')}>
                        <View style={{
                            height: Dimensions.get('window').height / 9.5,
                            width: Dimensions.get('window').width * 0.95,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#555555',
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                backgroundColor: '#ff9645',
                                flex: 1,
                            }}>

                            </View>
                            <Text style={styles.textInformationButton}>
                                Koolhydraten</Text>
                            <AntDesign style={styles.iconInformationButton} name='right' size={32} color='#555555' />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Dranken */}
                <View style={{
                    marginTop: 8,
                }}>
                    <TouchableOpacity style={{
                        alignItems: "center",
                    }}
                        onPress={() => navigation.navigate('Dranken')}>
                        <View style={{
                            height: Dimensions.get('window').height / 9.5,
                            width: Dimensions.get('window').width * 0.95,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#555555',
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                backgroundColor: '#96deeb',
                                flex: 1,
                            }}>

                            </View>
                            <Text style={styles.textInformationButton}>
                                Dranken</Text>
                            <AntDesign style={styles.iconInformationButton} name='right' size={32} color='#555555' />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Calorien */}
                <View style={{
                    marginTop: 8,
                }}>
                    <TouchableOpacity style={{
                        alignItems: "center",
                    }}
                        onPress={() => navigation.navigate('Caloriën')}>
                        <View style={{
                            height: Dimensions.get('window').height / 9.5,
                            width: Dimensions.get('window').width * 0.95,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#555555',
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                backgroundColor: '#7a7a7a',
                                flex: 1,
                            }}>

                            </View>
                            <Text style={styles.textInformationButton}>
                                Caloriën</Text>
                            <AntDesign style={styles.iconInformationButton} name='right' size={32} color='#555555' />
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    textInformationButton: {
        textAlign: 'left',
        flex: 20,
        textAlignVertical: 'center',
        paddingRight: 92,
        paddingLeft: 64,
    },
    iconInformationButton: {
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 8,
    }
});
