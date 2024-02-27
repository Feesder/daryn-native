import { Tag } from 'entities'
import React from 'react'
import { View, Text } from 'react-native'

export const InfoTags = () => {
    return (
        <View>
            <Text style={{color: '#fff', fontSize: 24, fontWeight: '600', textAlign: 'center'}}>Метки</Text>
            <View style={{marginTop: 10}}>
                <Tag color='#34A853'>дорога в хорошем состоянии</Tag>
                <Tag color='#FBBC05'>дорога с дефектами (трещины)</Tag>
                <Tag color='#EA4335'>дорога с дефектами (ямы и выбоины)</Tag>
                <Tag color='#8B00FF'>Дорога без асфальта</Tag>
                <Tag color='#D8D9DA'>Неопределенно</Tag>
            </View>
        </View>
    )
}