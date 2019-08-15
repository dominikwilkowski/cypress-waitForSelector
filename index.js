/**
 * Wait for a thing by polling for it
 *
 * @param  {(string|function)} item                  - A jQuery selector string or a function that returns a boolean
 * @param  {object}            [options]             - An options object
 * @param  {number}            [options.timeout=200] - The time between tries in milliseconds
 * @param  {number}            [options.tries=300]   - The amount of times to try before failing
 *
 * @return {Promise}                                 - A Cypress promise, more at https://docs.cypress.io/api/utilities/promise.html
 */
const waitFor = ( item, options = {} ) => {
	if( typeof item !== 'string' && !(item instanceof Function) ) {
		throw new Error('Cypress plugin waitFor: The first parameter should be a string or a function');
	}

	const defaultSettings = {
		timeout: 200,
		tries: 300,
	};
	const SETTINGS = { ...defaultSettings, ...options };

	const check = item => {
		if( typeof item === 'string' ) {
			return Cypress.$( item ).length > 0;
		}
		else {
			return item();
		}
	}

	return new Cypress.Promise( ( resolve, reject ) => {
		let index = 0;
		const interval = setInterval( () => {
			if( check( item ) ) {
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
