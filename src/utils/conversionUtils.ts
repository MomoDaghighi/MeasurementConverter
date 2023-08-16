import { Unit, Conversion } from '../types';

export function convert({ from, to, value }: Conversion): number {
  const baseValue = value / from.conversionFactor;
  return baseValue * to.conversionFactor;
}