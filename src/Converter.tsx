import React from 'react';
import { Unit, UnitCategory } from './types';
import { useConverter } from './useConverter';

interface ConverterProps {
  units: Unit[];
  category: UnitCategory;
  setCategory: (category: UnitCategory) => void;
  inputUnit: Unit;
  setInputUnit: (unit: Unit) => void;
  outputUnit: Unit;
  setOutputUnit: (unit: Unit) => void;
}

export const Converter: React.FC<ConverterProps> = ({ units, category, setCategory,inputUnit,
  setInputUnit,
  outputUnit,
  setOutputUnit }) => {
  const {
    input,
    setInput,
    convert,
  } = useConverter(inputUnit,outputUnit);

  return (
    <div>
    <select value={category} onChange={(e) => setCategory(e.target.value as UnitCategory)}>
      <option value="length">Length</option>
      <option value="weight">Weight</option>
      <option value="volume">Volume</option>
    </select>

    <div>
    <input 
  type="text" 
  value={input} 
  onChange={(e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && !isNaN(Number(value)))) {
      setInput(Number(value));
    }
  }} 
  pattern="\d*"
/>
      <select value={inputUnit} onChange={(e) => setInputUnit(e.target.value as Unit)}>
        {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
      </select>
    </div>

    <div>
      <input type="number" value={convert()} readOnly />
      <select value={outputUnit} onChange={(e) => setOutputUnit(e.target.value as Unit)}>
        {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
      </select>
    </div>
  </div>
  );
};