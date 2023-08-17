import React from 'react';
import { Unit } from '../types';
import { useUnitConversion } from '../hooks/useUnitConversion';

interface UnitConverterProps {
  initialUnit: Unit;
  units: Unit[];
}

export function UnitConverter({ initialUnit, units}: UnitConverterProps):JSX.Element {
  const { conversion, handleChange} = useUnitConversion({
    from: initialUnit,
    to: initialUnit,
    value: 0,
  });

  return (
    <div>
      <input
      type="number"
      value={conversion.value}
      onChange={(e) => handleChange(Number(e.target.value), conversion.to)}
      />
      <select value={conversion.to.name} onChange={(e) => handleChange(conversion.value, units.find(u => u.name === e.target.value)!)}>
        {units.map((unit) => (
          <option key={unit.name} value={unit.name}>
            {unit.name}
          </option>
        ))}
      </select>
    </div>
  );
}