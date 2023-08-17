import React from 'react';
import { UnitConverter } from './components/UnitConverter';
import { Unit } from './types'
import './App.css';

const LENGTH_UNITS: Unit[] = [
  { type: 'length', name: 'Meter', conversionFactor: 1},
  { type: 'length', name: 'Foot', conversionFactor: 3.28084},
  {type: 'length', name: 'Kilometre', conversionFactor: 0.001},
  {type: 'length', name: 'Inch', conversionFactor: 39.3701},
  {type: 'length', name: 'Mile', conversionFactor: 0.000621371}
];

function App(): JSX.Element {
  return (
    <div className="App">
      <UnitConverter initialUnit={LENGTH_UNITS[0]} units={LENGTH_UNITS} />
    </div>
  );
}

export default App;
