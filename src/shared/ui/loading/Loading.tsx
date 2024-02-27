import React, { useRef, useEffect } from 'react'
import { Image, Animated,  } from 'react-native'
import { Easing } from 'react-native-reanimated'

export const Loading = () => {
    const value = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(Animated.timing(value, { toValue: 1, useNativeDriver: true, duration: 2000, easing: Easing.linear })).start()
    }, [])

    const spin = value.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <Animated.View style={{ transform: [{rotate: spin}] }}>
            <Image source={require("../../../../assets/loading.png")} />
        </Animated.View>
    )
}