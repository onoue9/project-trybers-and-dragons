import Archetype, { Mage } from './Archetypes';
import Energy, { EnergyType } from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _type_: EnergyType;
  private _amount: number;
  private damage: number;
  
  constructor(_name: string) {
    this._race = new Elf(_name, 10);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._type_ = this._archetype.energyType;
    this._amount = getRandomInt(1, 10);
    this._energy = {
      type_: this._type_,
      amount: this._amount,
    };
    this.damage = 0;
  }

  attack(enemy: SimpleFighter) {
    return enemy.receiveDamage(this._strength);
  }

  special(enemy: SimpleFighter) {
    return enemy.receiveDamage(this._strength * 2);
  }

  levelUp() {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) { 
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: 10 };
  }

  receiveDamage(attackPoints: number) {
    this.damage = attackPoints - this._defense;
    if (this.damage > 0) {
      this._lifePoints -= this.damage;
      if (this._lifePoints < 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }

  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get dexterity() { return this._dexterity; }
  get maxLifePoints() { return this._maxLifePoints; }
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
  get defense() { return this._defense; }
  get energy() { return { type_: this._archetype.energyType, amount: 10 }; }
  get type() { return this._type_; }
  get amount() { return this._amount; }
}