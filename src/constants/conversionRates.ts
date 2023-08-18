import { LengthUnit, WeightUnit, VolumeUnit } from "../types/units";

export const LENGTH_CONVERSION_RATES: Record<LengthUnit, number> = {
  meter: 1,
  foot: 3.28084,
  kilometer: 0.001,
  inch: 39.3701,
  mile: 0.000621371
};

export const WEIGHT_CONVERSION_RATES: Record<WeightUnit, number> = {
  kg: 1,
  g: 1000,
  lb: 2.20462
};

export const VOLUME_CONVERSION_RATES: Record<VolumeUnit, number> = {
  l: 1,
  "m^3": 0.001,
  cc: 1000
};