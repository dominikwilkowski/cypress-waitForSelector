const waitFor = ( element, options = {} ) => {
	if( !typeof element === 'string' ) {
		throw new Error(`The first parameter should be a function but was: ${ typeof element }`);
	}

	const defaultSettings = {
		timeout: 200,
		tries: 300,
	};
	const SETTINGS = { ...defaultSettings, ...options };

	const check = element => {
		return Cypress.$( element ).length > 0;
	}

	return new Cypress.Promise( ( resolve, reject ) => {
		let index = 0;
		const interval = setInterval( () => {
			if( check( element ) ) {
				clearInterval( interval );
				resolve();
			}
			if( index > SETTINGS.tries ) {
				reject();
			}
			index ++;
		}, SETTINGS.timeout );
	});
}

Cypress.Commands.add( 'waitFor', waitFor );
