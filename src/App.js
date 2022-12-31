import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SimpleButtonClickEvent from './5.SimpleButtonClickEvent/SimpleButtonClickEvent';
import AgeCounting from './1.AgeCounting/AgeCounting';
import PlacingOrder from './4. PlacingOrder/PlacingOrder';
import JakeMealTime from './3. JakeMealTime/JakeMealTime';

function App() {

  return (
    <div className="App mt-12">
      <AgeCounting></AgeCounting>
      <JakeMealTime></JakeMealTime>
      <PlacingOrder></PlacingOrder>
      <SimpleButtonClickEvent></SimpleButtonClickEvent>
    </div>
  );
}

export default App;
