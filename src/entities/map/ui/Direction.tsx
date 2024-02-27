import React, { useEffect, useState } from 'react';
import { Mark } from 'shared/api/model/Mark'
import MapViewDirections from 'react-native-maps-directions';

interface props {
    origin: Mark,
    destination: Mark
}

export const Direction = ({origin, destination}: props) => {
    const [color, setColor] = useState<string>('#1976D2');

    if (!destination) {
        return;
    }

    const originTime = new Date(origin.timeAdded)
    const destinationTime = new Date(destination.timeAdded)

    if (destinationTime.getTime() - originTime.getTime() >= 50000 || destinationTime.getTime() - originTime.getTime() < 0) {
        return;
    }

    useEffect(() => {
        switch (origin.road) {
            case 'ROAD_CRACKS':
                setColor('#FBBC05');
                break;
            case 'ROAD_DEFAULT':
                setColor('#34A853');
                break;
            case 'ROAD_PITS':
                setColor('#EA4335');
                break;
            case 'ROAD_WITHOUT_ASPHALT':
                setColor('#D8D9DA');
                break;
            default:
                setColor('#8B00FF');
        }
    }, [])

    return (
        <MapViewDirections 
            origin={{latitude: origin.latitude, longitude: origin.longitude}}
            destination={{latitude: destination.latitude, longitude: destination.longitude}}
            strokeColor={color}
            strokeWidth={5}
            apikey="AIzaSyBArmlt83tRurlYxOKP5hplyqY8EYcKAyc"
        />
    )
}