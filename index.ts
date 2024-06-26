/* * */

class LOGGER {
	//

	divider(message?: string, size = 50) {
		console.log();
		if (message) console.log(`- ${message} ${'-'.repeat(size - 2 - message.length)}`);
		else console.log('-'.repeat(size));
		console.log();
	}

	//

	error(message: string, error?: Error) {
		console.log(`✘ ${message}`, error || '');
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

	terminate(message: string) {
		console.log();
		console.log('- - - - - - - - - - - - - - - - - - - - -');
		console.log(message);
		console.log('- - - - - - - - - - - - - - - - - - - - -');
		console.log();
	}

	//
}

/* * */

export default new LOGGER();
