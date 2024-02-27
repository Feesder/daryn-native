import React from 'react'
import { Pressable, View, StyleSheet } from 'react-native';

interface props {
    onActivate: () => void;
    activate: boolean
}

export const CameraButton = ({onActivate, activate}: props) => {
    
    return (
        <Pressable onPress={onActivate} style={styles.button}>
            <View style={{width: 75, height: 75, borderRadius: 50, backgroundColor: activate ? '#ff0000' : '#ffffff'}}>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 90,
        height: 90,
        backgroundColor: null,
        borderWidth: 4,
        borderColor: '#ffffff'
    }
})