import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gameDataService } from '../firebase-service/game-data.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})

export class StartScreenComponent {

  constructor(private gameData: gameDataService, private router: Router) { }

  newGame(){
    let game = new Game();
    this.gameData.addGame(game.toJson()).then((gameInfo:any)=>{
      this.router.navigateByUrl('/game/' + gameInfo.id);
    })
  }
}
