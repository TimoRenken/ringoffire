import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation: boolean = false;
  currentCard: string | undefined = '';
  game: Game = new Game();

  constructor() {
    this.newGame();
  }

  newGame(): void {
    this.game = new Game();
  }

  takeCard(): void {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      console.log(this.currentCard);
      this.pickCardAnimation = true;

      setTimeout(() => {
        if (this.currentCard != undefined) {
          this.game.playedCards?.push(this.currentCard);
          console.log('New card:' + this.currentCard);
          console.log('Game is', this.game)

        } else {
          this.currentCard
        }
        this.pickCardAnimation = false;
      }, 1000)
    }
  }

}
