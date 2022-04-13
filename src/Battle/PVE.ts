import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: SimpleFighter;
  private _player2: SimpleFighter[];

  constructor(player1: SimpleFighter, player2: SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight() {
    this._player2.forEach(
      (play2) => console.log(this._player1.attack(play2)),
    );
    this._player2.forEach(
      (play2) => console.log(play2.attack(this._player1)),
    );
    if (this._player1.lifePoints < 0) { 
      console.log('Player 1 morreu !');
    }
    this._player2.forEach(
      (play2, index) => {
        if (play2.lifePoints < 0) console.log(`Player2[${index + 1}] morreu !`);
      },
    );
    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}