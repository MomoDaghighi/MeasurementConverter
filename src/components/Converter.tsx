import React from 'react';
import { Unit, UnitCategory } from '../types/units';
import { useConverter } from '../hooks/useConverter';

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
    <div className='ml-16'>
    <select className='bg-slate-200 select-width h-8 mb-3 border rounded-md' value={category} onChange={(e) => setCategory(e.target.value as UnitCategory)}>
      <option value="length">Length</option>
      <option value="weight">Weight</option>
      <option value="volume">Volume</option>
    </select>
    <div className='grid grid-cols-2 mt-5'>
      <div>
      <input
      className='selected text-center w-56 h-10 text-xl rounded-t-md border-b border-b-slate-400' 
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
  <span className='text-slate-300 ml-6 text-3xl'>=</span>
        <select className='selected bg-slate-200 w-56 rounded-b-md h-7' value={inputUnit} onChange={(e) => setInputUnit(e.target.value as Unit)}>
          {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
        </select>
      </div>

      <div>
        <input className='selected text-center w-56 h-10 text-xl rounded-t-md border-b border-b-slate-400' type="number" value={convert()} readOnly />
        <select className='selected bg-slate-200 w-56 rounded-b-md h-7' value={outputUnit} onChange={(e) => setOutputUnit(e.target.value as Unit)}>
          {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
        </select>
      </div>
    </div>
  </div>
  );
};