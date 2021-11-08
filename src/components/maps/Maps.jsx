import React, { useEffect, useRef } from 'react';
import './map.scss'

function MapView(props) {
  const mapRef = useRef();
  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: props.center,
      zoom: props.zoom,
      disableDefaultUI: true
    });
  }, [props]);
  return <div 
        ref={mapRef} 
        className='map'
    />;
}

export default MapView;