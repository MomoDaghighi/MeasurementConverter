import { useState } from 'react';
import { LengthUnit, Unit, UnitCategory, VolumeUnit, WeightUnit } from './types';
import { LENGTH_CONVERSION_RATES, WEIGHT_CONVERSION_RATES, VOLUME_CONVERSION_RATES } from './constrants';

export const useConverter = (inputUnit: Unit, outputUnit: Unit) => {

  const [input, setInput] = useState<number | "">(1);
  const [category, setCategory] = useState<UnitCategory>("length");


  const convert = (): number | "" => {
    if (input === "" || isNaN(Number(input))) {
      return "";
    }

    let inputInBaseUnit: number;
    let output: number;

    switch (category) {
      case "length":
        inputInBaseUnit = Number(input) / LENGTH_CONVERSION_RATES[inputUnit as LengthUnit];
        output = inputInBaseUnit * LENGTH_CONVERSION_RATES[outputUnit as LengthUnit];
        break;
      case "weight":
        inputInBaseUnit = Number(input) / WEIGHT_CONVERSION_RATES[inputUnit as WeightUnit];
        output = inputInBaseUnit * WEIGHT_CONVERSION_RATES[outputUnit as WeightUnit];
        break;
      case "volume":
        inputInBaseUnit = Number(input) / VOLUME_CONVERSION_RATES[inputUnit as VolumeUnit];
        output = inputInBaseUnit * VOLUME_CONVERSION_RATES[outputUnit as VolumeUnit];
        break;
    }

    return output;
  };

  return {
    input,
    setInput,
    inputUnit,
    outputUnit,
    category,
    setCategory,
    convert
  };
};