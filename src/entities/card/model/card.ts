interface ICardProps {
	id: string;
	rank: CardRank;
	suit: CardSuit;
}

export class Card {
	id: string;
	rank: CardRank;
	suit: CardSuit;

	private constructor(props: ICardProps) {
		this.id = props.id;
		this.rank = props.rank;
		this.suit = props.suit;
	}

	public static create(props: ICardProps) {
		const instance = new Card(props);
		return instance;
	}
}
