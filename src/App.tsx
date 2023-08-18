import React, { useState, useEffect } from 'react';
import { Converter } from './components/Converter';
import { Unit, UnitCategory, LengthUnit, WeightUnit, VolumeUnit } from './types/units';

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
        setInputUnit("l");
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
      units = ["l", "m^3", "cc"] as VolumeUnit[];
      break;
  }

  return (
    <div className='grid h-80 justify-center mt-36'>
      <div className='rounded-md width border border-c'>
        <h1 className='text-white text-center font-bold text-3xl mb-10 pt-9'>Unit Converter</h1>
        <Converter
          key={category}
          units={units}
          category={category}
          setCategory={setCategory}
          inputUnit={inputUnit}
          setInputUnit={setInputUnit}
          outputUnit={outputUnit}
          setOutputUnit={setOutputUnit}
        />
      </div>
    </div>
  );
};

export default App;