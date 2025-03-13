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
        }
    }
}