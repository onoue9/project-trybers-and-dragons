import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _count = 0;

  constructor(_name: string) { 
    super(_name);
    this._energyType = 'mana';
    Mage.addInstance();
  }

  private static addInstance() { this._count += 1; }

  static createdArchetypeInstances() { return this._count; }

  get energyType() { return this._energyType; }
}