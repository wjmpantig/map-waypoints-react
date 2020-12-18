import React, { FormEvent, useEffect, useRef, useState } from 'react';

import './App.scss';
import InputField from './components/InputField';
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
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <div className="app">
      <div className="sidebar">
        <form onSubmit={onSubmit}>
          <InputField type="text" placeholder="Starting location" label="Starting location" />
          <InputField type="text" placeholder="Drop-Off Point" label="Drop-Off Point" />
          <div className="button-container">
          </div>
        </form>
      </div>
      <div className="map" ref={mapRef} />
    </div>
  );
}

export default App;
