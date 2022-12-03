const isMock = process.env.REACT_APP_IS_MOCK;

export function getRandomIntegerSequence(n: number) {
	if (isMock) {
		const result: number[] = [];
		for (let i = 0; i < n - 1; i++) {
			result.push(i);
		}

		return result;
	}

	return [];
}
