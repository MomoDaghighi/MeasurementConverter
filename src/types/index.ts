export type UnitTypes = 'length' | 'weight' | 'volume';

export interface Unit {
  type: UnitTypes;
  name: string;
  conversionFactor: number;
}

export interface Conversion {
  from: Unit;
  to: Unit;
  value: number;
}