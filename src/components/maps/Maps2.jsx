import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import './map.scss'

import key from '../../data/keys'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 0,
  lng: 0
};

function MyComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key.google
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  console.log(props.center)
  return isLoaded ? (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        initialCenter={props.center}
        zoom={2}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(MyComponent)