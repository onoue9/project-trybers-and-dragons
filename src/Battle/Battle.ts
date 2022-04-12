import { SimpleFighter } from '../Fighter';

abstract class Battle {
  constructor(
    protected player1: SimpleFighter,
    protected player2: SimpleFighter,
  ) { }

  fight(): number {
    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
