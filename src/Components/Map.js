import { marker } from 'leaflet';
import { useEffect, useState } from 'react';

const Map = () => {
    let map;
    useEffect(() => {
        map = L.map('map', {
            center: [30.2226, -92.6571],
            zoom: 9
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(map);
        let marker = L.marker([30.2226, -92.6571]).addTo(map)
        .openPopup();
        var latlngs = [[30.48743578841009, -92.63129875283278],[30.044715353622905, -92.6405200125175],[30.038717384318286, -92.99504222159248], [30.437524900228084, -93.06556773585392]
          ];

        var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
    }, [])
    return (
        <div className="mapContainer">
            <h1>Where do we service?</h1>
            <div className='visualMapContainer'>
                <div id='map'/>
            </div>
        </div>
    )
}

export default Map