import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'

interface props {
    color: string,
    children?: ReactNode 
}

export const Tag = ({color, children}: props) => {
    return (
        <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: 5}}>
            <View style={{width: 20, height: 20, borderWidth: 5, borderColor: color, borderRadius: 50}}></View>
            <Text style={{color: '#fff', marginLeft: 10, fontSize: 14, fontWeight: '500'}}>{children}</Text>
        </View>
    )
}