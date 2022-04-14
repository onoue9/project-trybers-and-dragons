import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;
  private damage: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
    this.damage = 0;
  }

  attack(enemy: SimpleFighter) {
    return enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number) {
    this.damage = attackPoints;
    if (this.damage === 0) this.damage = 1;
    if (this.damage > 0) { this._lifePoints -= this.damage; }
    if (this._lifePoints < 0) { this._lifePoints = -1; }
    return this._lifePoints;
  }
  
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
}