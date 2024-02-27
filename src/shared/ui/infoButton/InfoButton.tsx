import React from 'react';
import { Pressable, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface props {
    onClick: () => void;
    style: ViewStyle;
}

export const InfoButton = ({ onClick, style }: props) => {
    return (
        <Pressable onPress={onClick} style={{...style}}>
            <Image style={{...styles.button}} source={require('../../../../assets/info.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40
    }
})