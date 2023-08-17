import React, { useState, useEffect } from 'react';
import { Converter } from './Converter';
import { Unit, UnitCategory, LengthUnit, WeightUnit, VolumeUnit } from './types';

const App: React.FC = () => {
  const [category, setCategory] = useState<UnitCategory>("length");
  let units: Unit[] = [];
  const [inputUnit, setInputUnit] = useState<Unit>("meter");
  const [outputUnit, setOutputUnit] = useState<Unit>("foot");

  useEffect(() => {
    switch (category) {
      case "length":
        setInputUnit("meter");
        setOutputUnit("foot");
        break;
      case "weight":
        setInputUnit("kg");
        setOutputUnit("lb");
        break;
      case "volume":
        setInputUnit("L");
        setOutputUnit("m^3");
        break;
    }
  }, [category]);

  switch (category) {
    case "length":
      units = ["meter", "foot", "kilometer", "inch", "mile"] as LengthUnit[];
      break;
    case "weight":
      units = ["kg", "g", "lb"] as WeightUnit[];
      break;
    case "volume":
      units = ["L", "m^3", "cc"] as VolumeUnit[];
      break;
  }

  return (
    <div>
      <h1>Unit Converter</h1>
      <Converter
        units={units}
        category={category}
        setCategory={setCategory}
        inputUnit={inputUnit}
        setInputUnit={setInputUnit}
        outputUnit={outputUnit}
        setOutputUnit={setOutputUnit}
      />
    </div>
  );
};

export default App;