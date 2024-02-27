import React from 'react';
import { InfoButton } from 'shared/ui/infoButton/InfoButton';

interface props {
    navigation: any;
}

export const MapInfo = ({navigation}: props) => {

    const onClick = () => {
        navigation.navigate('Info')
    }

    return <InfoButton style={{paddingTop: 3, paddingLeft: 3}} onClick={onClick} />
}