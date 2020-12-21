import React, { FormEvent, useEffect, useRef, useState } from 'react';

import './App.scss';
import Button from './components/Button/';
import InputField from './components/InputField';
import { defaultMapSetttings } from './constants';
import { loadMap } from './util/map';

const App = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const initMap = async () => {
    if (!mapRef.current) {
      return;
    }
    try {
      await loadMap();
      setMap(new google.maps.Map(mapRef.current, defaultMapSetttings));
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
            <Button type="submit">Submit</Button>
            <Button type="reset">Reset</Button>
          </div>
        </form>
      </div>
      <div className="map" ref={mapRef} />
    </div>
  );
}

export default App;
