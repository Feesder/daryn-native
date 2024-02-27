import { LocationObject } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Map, MapBottomSheetModal } from 'widgets'
import * as Location from 'expo-location'
import MarkService from '../api/service/MarkService';
import Store from 'shared/store/directionsStore';
import { observer } from 'mobx-react-lite'
import { Loading } from 'shared/ui/loading/Loading'
import { Mark } from 'shared/api/model/Mark'

interface props {
    navigation: any
}

export const MapPage = observer(({navigation}: props) => {
    const [currentLocation, setCurrentLocation] = useState<LocationObject>()
    const [directions, setDirections] = useState<Mark[]>(Store.directions)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    console.log(Store.directions)

    useEffect(() => {
        const getPermissions = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Please grant location permissions')
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            if (currentLocation) {
                setCurrentLocation(currentLocation)
            }
        };
        getPermissions()

        MarkService.getMarks().then((response) => {
            const data = response.data.map((value) => ({
                ...value,
                timeAdded: new Date(value.timeAdded)
            }))
            Store.directions = data
            setDirections(data)
            setIsLoading(!isLoading)
        });
    }, [])

    if (isLoading) {
        return (
            <View style={styles.load}>
                <Loading />
            </View>
        )
    }

    const updateDirections = (directions: Mark[]) => {
        setDirections(directions)
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <Map directions={directions} currentLocation={currentLocation} navigation={navigation} />
            <MapBottomSheetModal updateDirections={updateDirections} />
        </GestureHandlerRootView>
    )
})

const styles = StyleSheet.create({
    load: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });