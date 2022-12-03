import { Card } from "entities/card";
import { getRandomIntegerSequence } from "shared/api/game";
import { Logger } from "shared/lib";

interface IGameProps {
	online: boolean;
	count: CardCount;
}

export class Game {
	online: boolean;
	playerIds: string[] = [];
	tramp: CardSuit;
	deck: Card[];
	static logger: Logger = new Logger();

	private constructor(game: IGameProps, deck: Card[]) {
		this.online = game.online;
		this.deck = deck;
		this.tramp = "HEARTS";
	}

	public static async create(game: IGameProps) {
		const deck = await Game.createDeck(game.count);
		return new Game(game, deck);
	}

	private static async createDeck(count: CardCount = 36): Promise<Card[]> {
		try {
			const sequence = await getRandomIntegerSequence(count);
			alert(sequence);
			return [];
		} catch (error) {
			this.logger.catchError(error);
			return [];
		}
	}
}
