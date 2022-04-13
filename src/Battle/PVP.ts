import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: SimpleFighter;
  private _player2: SimpleFighter;

  constructor(player1: SimpleFighter, player2: SimpleFighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight() { 
    if (this._player1.strength > this._player2.strength) {
      console.log(this._player1.attack(this._player2));
      console.log(this._player2.attack(this._player1));
    } else {
      console.log(this._player2.attack(this._player1));
      console.log(this._player1.attack(this._player2));
    }
    if (this._player1.lifePoints < 0) { 
      console.log('Player 1 morreu !');
    }
    if (this._player2.lifePoints < 0) {
      console.log('Player 2 morreu !');
    }
    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}
