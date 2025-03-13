export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push( i + '_of_clubs.png')
            this.stack.push( i + '_of_diamonds.png')
            this.stack.push( i + '_of_hearts.png')
            this.stack.push( i + '_of_spades.png')
            shuffle(this.stack);
        }
    }
}

// code from stackoverflow , just for testing

function shuffle(array:any) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  
  // Used like so
  let arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);