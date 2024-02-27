import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Camera, FlashMode, CameraType } from 'expo-camera';
import * as MediaLabrary from 'expo-media-library';
import cameraAction from '../store/cameraAction';
import { observer } from 'mobx-react-lite';

export const Camcorder = observer(() => {
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);
    const [type, setType] = useState<CameraType>(CameraType.back);
    const [flash, SetFlash] = useState<FlashMode>(FlashMode.off);
    const cameraRef = useRef(null);

    cameraAction.cameraRef = cameraRef;

    useEffect(() => {
        (async () => {
            MediaLabrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted')
        })();
    }, [])

    if (hasCameraPermission === false) {
        return <Text>No acces to camera</Text>
    }

    return (
        <Camera
            style={styles.camera}
            type={type}
            flashMode={flash}
            ref={cameraRef}
        />
    )
})

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})