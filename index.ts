/* * */

class LOGGER {
	//

	divider(message?: string, size = 30) {
		console.log();
		if (message) console.log(`${'-'.repeat(size / 2)} ${message} ${'-'.repeat(size / 2)}`);
		else console.log('-'.repeat(size));
		console.log();
	}

	//

	error(message: string, error?: Error) {
		console.log(`✘ ${message}`, error);
	}

	//

	info(message: string) {
		console.log(`→ ${message}`);
	}

	//

	init() {
		console.log();
		console.log('------------------------');
		console.log((new Date()).toISOString());
		console.log('------------------------');
		console.log();
	}

	//

	success(message: string) {
		console.log(`✓ ${message}`);
	}

	//
}

/* * */

export default LOGGER;
