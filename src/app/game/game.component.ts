import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";
import { gameDataService } from '../firebase-service/game-data.service';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collectionData, collection, doc, onSnapshot, addDoc, updateDoc } from '@angular/fire/firestore';
import { PlayerMobileComponent } from '../player-mobile/player-mobile.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, PlayerMobileComponent, MatIconModule, MatButtonModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  game: Game = new Game();


  constructor(private route: ActivatedRoute, public gameData: gameDataService, public dialog: MatDialog) {
    this.route.params.subscribe(params => {
      const gameId = params.id;
      if (gameId) {
        this.loadGame(gameId);
      }
    });
  }

  loadGame(gameId: string) {
    const docRef = this.gameData.getSingleDocRef('games', gameId);
    onSnapshot(docRef, (snapshot) => {
      const data = snapshot.data();
      if (data) {
        this.game = Game.fromJson(data, snapshot.id);
      }
    });
  }

  newGame(): void {
    this.game = new Game();
  }

  takeCard(): void {
    if (!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop();
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      console.log(this.game)
      this.gameData.updateGame(this.game);

      setTimeout(() => {
        if (this.game.currentCard != undefined) {
          this.game.playedCards?.push(this.game.currentCard);
        } else {
          this.game.currentCard
        }
        this.game.pickCardAnimation = false;
        this.gameData.updateGame(this.game);
      }, 1000)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {

    });

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        console.log('Aktuelles Spiel:', this.game);
        this.gameData.updateGame(this.game);
      }
    });
  }
}
