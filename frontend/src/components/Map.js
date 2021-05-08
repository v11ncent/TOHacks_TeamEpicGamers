import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '70%',
  height: '95%',
  border: '5px solid white'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyB7t1el6JYtCUDBzooKK4RTTfnSaSHF_1M'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)