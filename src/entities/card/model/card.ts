import { rankNumericValueDictionary } from "@/shared";

interface ICardProps {
  id: string;
  rank: CardRank;
  suit: CardSuit;
}

export class Card {
  id: string;
  rank: string;
  suit: string;

  private constructor(props: ICardProps) {
    this.id = props.id;
    this.rank = props.rank;
    this.suit = props.suit;
  }

  public static create(props: ICardProps) {
    const instance = new Card(props);
    return instance;
  }

  public convertRankToNumericValue(trump: CardSuit) {
    // @ts-ignore
    let numericValue = rankNumericValueDictionary[this.rank] || 1;
    if (this.suit === trump) {
      numericValue += 1000;
    }
    return numericValue;
  }
}
