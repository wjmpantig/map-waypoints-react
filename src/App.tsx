import React, { useEffect, useRef, useState } from 'react';

import './App.css';
import { loadMap } from './util/map';

const initialSettings: google.maps.MapOptions = {
  zoom: 4,
  center:  { lat: -25.344, lng: 131.036 },
  disableDefaultUI: true,
}

const App = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const initMap = async () => {
    if (!mapRef.current) {
      return;
    }
    try {
      await loadMap();
      setMap(new google.maps.Map(mapRef.current, initialSettings));
    } catch {
    }
  }
  useEffect(() => {
    initMap();
  }, [])
  return (
    <div className="App">
      <div className="map" ref={mapRef} />
    </div>
  );
}

export default App;
