import L from 'leaflet';
import React from 'react';
import "./style.css";

function Map({ markerPosition }) {

  React.useEffect(() => {
    // create map
    var mymap = L.map('map').setView([52.484531, 13.449620], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9tZXJyYWp1YW4iLCJhIjoiY2tiZ3JqczRwMThicTMwbm9mZ2lncWJxeCJ9.v3F5ARQKx95kiICwow6RJw', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
  L.marker([52.484531, 13.449620]).addTo(mymap);
  }, []);






  return <div id="map"></div>
}

export default Map;

