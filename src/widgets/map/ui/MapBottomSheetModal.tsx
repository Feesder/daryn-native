import BottomSheet from '@gorhom/bottom-sheet'
import { DirectionsLogs } from 'features';
import { observer } from 'mobx-react-lite';
import React, { useMemo, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Mark } from 'shared/api/model/Mark';

interface props {
    updateDirections: (directions: Mark[]) => void
}

export const MapBottomSheetModal = observer(({updateDirections}: props) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['10%', '55%', '100%'], [])

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            backgroundStyle={{backgroundColor: 'rgb(18, 18, 18)'}}
            handleIndicatorStyle={{backgroundColor: '#fff', width: '15%'}}
        >
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Отчет</Text>
                <DirectionsLogs updateDirections={updateDirections} />
                <Text style={{...styles.title, marginTop: 15}}>Навигатор</Text>
            </View>
        </BottomSheet>
    )
})

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgb(18, 18, 18)'
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600'
    }
})