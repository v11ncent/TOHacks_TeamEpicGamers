import React, { useState } from 'react'
import { InfoWindow, GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: '70%',
  height: '99%',
  border: '5px solid pink'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};


function Map() {
    const [position, setPosition] = useState(null);
    const positionList = [{ lat: 40.69839895, lng: -73.98068914 },
                          { lat: 40.73935542, lng: -73.99931783 }]
    return (
        <LoadScript
            googleMapsApiKey=''
        >
            <GoogleMap
                id='bikeshare-map'
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
            > 
                {
                    <>
                        {positionList.map((position, ind) => {
                            return <Marker id={ind} position={position} onClick={() => setPosition(position)} />
                        })}
                        {position && (
                            <InfoWindow onCloseClick={() => setPosition(null)} position={position}>
                                <div>
                                    <h1>{position.lat}</h1>
                                </div>
                            </InfoWindow>
                        )}
                    </>
                }
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map);