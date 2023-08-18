import { useState } from 'react';
import { LengthUnit, Unit, UnitCategory, VolumeUnit, WeightUnit } from '../types/units';
import { LENGTH_CONVERSION_RATES, WEIGHT_CONVERSION_RATES, VOLUME_CONVERSION_RATES } from '../constants/conversionRates';

export const useConverter = (inputUnit: Unit, outputUnit: Unit) => {

  const [input, setInput] = useState<number | "">(1);
  const [category, setCategory] = useState<UnitCategory>("length");


  const convert = (): number | "" => {
    if (input === "" || isNaN(Number(input))) {
      return "";
    }

    let inputInBaseUnit: number;
    let output: number;

    let inputUnitLower = (inputUnit as string).toLowerCase() as Unit;
    let outputUnitLower = (outputUnit as string).toLowerCase() as Unit;

    switch (category) {
      case "length":
        inputInBaseUnit = Number(input) / LENGTH_CONVERSION_RATES[inputUnitLower as LengthUnit];
        output = inputInBaseUnit * LENGTH_CONVERSION_RATES[outputUnitLower as LengthUnit];
        break;
      case "weight":
        inputInBaseUnit = Number(input) / WEIGHT_CONVERSION_RATES[inputUnitLower as WeightUnit];
        output = inputInBaseUnit * WEIGHT_CONVERSION_RATES[outputUnitLower as WeightUnit];
        break;
      case "volume":
        inputInBaseUnit = Number(input) / VOLUME_CONVERSION_RATES[inputUnitLower as VolumeUnit];
        output = inputInBaseUnit * VOLUME_CONVERSION_RATES[outputUnitLower as VolumeUnit];
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