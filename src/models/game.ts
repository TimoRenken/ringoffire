export class Game {
    public id?: string;
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation: boolean = false;
    public currentCard: string | undefined = '';
  
    constructor() {
      for (let i = 1; i < 14; i++) {
        this.stack.push('clubs_' + i);
        this.stack.push('diamonds_' + i);
        this.stack.push('hearts_' + i);
        this.stack.push('spades_' + i);
        shuffle(this.stack);
    }
    }
  
    /**
     * Converts instance to plain object for Firestore
     */
    public toJson() {
      return {
        players: this.players,
        stack: this.stack,
        playedCards: this.playedCards,
        currentPlayer: this.currentPlayer,
        pickCardAnimation: this.pickCardAnimation,
        currentCard: this.currentCard !== undefined ? this.currentCard : null
      };
    }
  
    /**
     * Creates a Game instance from Firestore data
     */
    static fromJson(json: any, id?: string): Game {
      const game = new Game();
      game.players = json.players || [];
      game.stack = json.stack || [];
      game.playedCards = json.playedCards || [];
      game.currentPlayer = json.currentPlayer || 0;
      game.pickCardAnimation = !!json.pickCardAnimation
      game.currentCard = json.currentCard ?? undefined;
      if (id) game.id = id;
      return game;
    }
  }
  


// codeblock from stackoverflow:

function shuffle(array: any) {
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
