import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function Camerascreen() {
    const [hasCameraPermission, setCameraHasPermission] = useState(null);
    const [hasMediaLibraryPermission, setmediaLibraryHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestPermissionsAsync();
            setCameraHasPermission(cameraStatus.status === 'granted');
            const mediaLibrayrStatus = await MediaLibrary.requestPermissionsAsync();
            setmediaLibraryHasPermission(mediaLibrayrStatus.status === 'granted');
        })();
    }, []);

    // Check camera permission
    if (hasCameraPermission === null) {
        return <View />
    }
    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

        // Check media library permission
        if (hasMediaLibraryPermission === null) {
            return <View />
        }
        if (hasMediaLibraryPermission === false) {
            return <Text>No access to media library</Text>;
        }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />

            <Camera style={{ flex: 1 }} type={type} ref={ref => {
                setCameraRef(ref);
            }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'flex-end'
                    }}>

                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async () => {
                        if (cameraRef) {
                            const picture = await cameraRef.takePictureAsync();
                            const asset = await MediaLibrary.createAssetAsync(picture.uri);
                            await MediaLibrary.createAlbumAsync('FoodFriend', asset, false);
                            navigation.navigate('Bijhouden', { image: asset});
                        }
                    }}>
                        <View style={{
                            borderWidth: 3,
                            borderRadius: 50,
                            borderColor: 'white',
                            height: 83,
                            width: 83,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 16,
                        }}
                        >
                            <View style={{
                                borderWidth: 3,
                                borderRadius: 50,
                                borderColor: 'white',
                                height: 68,
                                width: 68,
                                backgroundColor: 'white',
                                margin: 64,
                            }} >
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

