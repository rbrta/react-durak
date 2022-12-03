export class Logger {
	errors: string[];

	constructor() {
		this.errors = [];
	}

	catchError(error: unknown) {
		this.errors.push(String(error));
		console.error(error);
	}
}
