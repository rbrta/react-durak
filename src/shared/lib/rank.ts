const rankArray: CardRank[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "JACK",
  "QUEEN",
  "KING",
  "ACE",
];

export const rankNumericValueDictionary = rankArray.reduce(
  (prevValue, newValue, currentIndex) => ({
    ...prevValue,
    [newValue]: currentIndex + 2,
  }),
  {}
);
