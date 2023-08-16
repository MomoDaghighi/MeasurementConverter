import { useState } from "react";
import { Unit, Conversion } from '../types';
import { convert } from '../utils/conversionUtils';

export function useUnitConversion(initialState: Conversion) {
  const [conversion, setConversion] = useState(initialState);

  function handleChange(value: number, to: Unit): void {
    setConversion(prevState => ({
      ...prevState,
      value: convert({ ...prevState, value, to }),
      to,
    }));
  }

  return { conversion, handleChange };
}