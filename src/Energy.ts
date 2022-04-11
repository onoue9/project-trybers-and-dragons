type EnergyType = 'mana' | 'stamina';

interface Energy {
  readonly type_: EnergyType;
  readonly amount: number;
}

export default Energy;
export { EnergyType };
