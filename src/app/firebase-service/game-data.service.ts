import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, onSnapshot, addDoc, updateDoc } from '@angular/fire/firestore';
import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root'
})

export class gameDataService {
  firestore = inject(Firestore);

  gameData: Game[] = [];

  unsubGameData;
  unsubSingleGameData;

  constructor() {
    this.unsubGameData = this.subGameData();

    this.unsubSingleGameData = onSnapshot(this.getSingleDocRef('games', '1cTwiipFpAtuklkmyg3w'), (game) => {});

  }

  subGameData() {
    return onSnapshot(this.getGamesRef(), (data) => {
      this.gameData = [];
      data.forEach(element => {
        this.gameData.push(this.setGameData(element.data(), element.id));
      });
    });
  }


  setGameData(obj: any, id: string): Game {
    return Game.fromJson(obj, id);
  }



  /**
   * This function is used to unsubscribe onSnapshot
   */
  ngOnDestroy() {
    this.unsubGameData();
    this.unsubSingleGameData();
  }


  /**
   * 
   * @returns ref for the collection id "games"
   */
  getGamesRef() {
    return collection(this.firestore, 'games');
  }


  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }


  /**
   * adds a new game to the firestore.
   * @param item 
   */
  async addGame(item: ReturnType<Game['toJson']>) {
    try {
      return await addDoc(this.getGamesRef(), item);
    } catch (err) {
      console.error(err);
      return null;
    }
  }


  async updateGame(game: Game) {
    if (game.id) {
      let docRef = this.getSingleDocRef('games', game.id)
      await updateDoc(docRef, game.toJson()).catch(
        (err) => { console.log(err); }
      )
    }
  }


  // getCleanJson(game: Game): {} {
  //   return {

  //   }

  // }

}
