import React, { useEffect, useState } from 'react';
import { Direction } from 'entities/map/ui/Direction';
import { StyleSheet } from 'react-native'
import { Mark } from 'shared/api/model/Mark';
import MapView from 'react-native-maps';
import { MapInfo } from 'entities';
import { observer } from 'mobx-react-lite';
import { LocationObject } from 'expo-location';

interface props {
    directions: Mark[]
    navigation: any;
    currentLocation: LocationObject; 
}

export const Map = observer(({directions, navigation, currentLocation}: props) => {
    console.log(directions)

    return (
        <MapView
        initialRegion={{
            latitude: currentLocation?.coords.latitude,
            longitude: currentLocation?.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        style={styles.map}>
            <MapInfo navigation={navigation} />
            {
                directions.map((value, index) => (
                    <Direction origin={value} destination={directions[index + 1]} key={String(value.id)} />
                ))
            }
        </MapView>
    )
})

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
})