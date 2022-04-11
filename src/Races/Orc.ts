import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _count = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc.addInstances();
  }

  private static addInstances() {
    this._count += 1;
  }

  static createdRacesInstances() {
    return this._count;
  }

  get maxLifePoints() { return this._maxLifePoints; }
}

export default Orc;
