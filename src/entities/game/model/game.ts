import {Entity} from "@/shared";

interface IGame {
    online: boolean;
    firstPlayerId: string;
    secondPlayedId?: string;
    tramp: CardSuit;
    count: CardCount;
    deck: string[];
}

export class Game extends Entity<IGame> {
    private constructor(game: IGame) {
        super(game);
    }

    public static create(game: IGame) {
        const instance = new Game(game);
        return instance;
    }

    public static createDeck(count: CardCount) {
        if (count === 52) {
        }
    }
}