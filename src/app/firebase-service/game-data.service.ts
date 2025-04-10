import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, onSnapshot, addDoc } from '@angular/fire/firestore';
import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root'
})

export class gameDataService {
  firestore = inject(Firestore);

  unsubGameData;

  constructor() {
    this.unsubGameData = onSnapshot(this.getGamesRef(), (data) => {
      data.forEach(element =>{
        console.log(element.data());
      });
    });
   }


  getGamesRef(){
    return collection(this.firestore, 'games');
  }

  async addGame(item: ReturnType<Game['toJson']>){
    await addDoc(this.getGamesRef(),item).catch(
      (err) => {console.log(err)}
    )
  }

}
