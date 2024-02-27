import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Location from 'expo-location'
import { CameraButton } from "shared/ui/cameraButton/CameraButton";
import axios from 'axios'
import CameraAction from "entities/camera/store/cameraAction";

interface NavbarProps {
    navigation: any
}

const API_URL = 'http://192.168.0.109:8080/api/v1/mark'

export const Navbar = ({ navigation }: NavbarProps) => {
    const [activate, setActivate] = useState<boolean>(false);
    const takePictureActivate = useRef(false);

    useEffect(() => {
        (async () => {
            await Location.requestForegroundPermissionsAsync();
        })();
    })

    const delay = (ms: number) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }

    const takeVideo = async () => {
        if (CameraAction.cameraRef) {
            while (takePictureActivate.current) {
                console.log(takePictureActivate.current)
                const data = await CameraAction.cameraRef.current.takePictureAsync();
                const currentLocation = await Location.getCurrentPositionAsync({});
                const base64 = await FileSystem.readAsStringAsync(data.uri, {
                    encoding: FileSystem.EncodingType.Base64,
                });
                const req = { 
                    longitude: currentLocation.coords.longitude, 
                    latitude: currentLocation.coords.latitude, 
                    accuracy: currentLocation.coords.accuracy, 
                    time: currentLocation.timestamp,
                    imageFile: base64 
                };
                if (!req) {
                    continue;
                }

                const headers = {
                    'Content-Type': 'application/json'
                };

                await axios.post(API_URL, JSON.stringify(req), { headers })
                .then((res) => {
                    console.log(res.status);
                })
                .catch((error) => {
                    console.log(error);
                });
    
                await delay(5000);
            }
        }
    }

    const onActivate = () => {
        setActivate(!activate)
        takePictureActivate.current = !takePictureActivate.current;
        takeVideo();
    }

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <CameraButton onActivate={onActivate} activate={activate} />
            </View>
            <View style={{position: 'absolute', left: 40, top: 33}}>
                <Pressable onPress={() => {
                    navigation.navigate('Map')
                }} style={styles.buttonNavigate}>
                    <Image
                        style={{width: 42, height: 42}}
                        source={require('../../../../assets/map.png')}
                    />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        paddingBottom: 30,
        width: '100%',
        backgroundColor: 'rgb(18, 18, 18)',
    },
    navbar: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonNavigate: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 55,
        height: 55,
        backgroundColor: null,
        borderWidth: 4,
        borderColor: '#ffffff'
    }
})