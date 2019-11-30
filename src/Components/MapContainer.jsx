
import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './MapContainer.module.css';
 


function MapContainer(props) {
    const lat = 57.712432;
    const lng = 12.266407;
   
    return (
        <div className={styles.mapContainer}>
            <Map
                google={props.google}
                zoom={10.5}
                className={styles.map}
                initialCenter={{ lat, lng }}
            >
            <Marker position={{ lat, lng }}/>

            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA87uSiTTHKUMHkJovHXC00GlVsbUMWEqY'
  })(MapContainer);