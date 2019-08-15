Cypress-waitfor
===============

> A zero-dependency plugin for [Cypress](https://www.cypress.io/) to wait for an element.

## Contents

* [Usage](#usage)
* [Options](#options)
* [Install](#install)
* [Release History](#release-history-app)
* [License](#license)

## Usage

```js
describe('Test suite', () => {
	it('A test description', function() {
		cy.visit('http://localhost:3000');
		// The page does an animation or loading
		// so we now need to wait for that
		cy.waitFor('#main-body');
		// Here we now have instant access to the #main-body element
		cy.get('#main-body').should('contain', 'Data loaded');
	});
});
```

## Options

You can an options object to `waitFor`.

```js
cy.waitFor('#main-body', {
	timeout: 200, // The time in ms to poll for changes
	tries: 300,   // How many times to try before failing
                // 300 tries at 200ms timeout = 1min
});
```

## Install

Install the plugin via `yarn add cypress-waitfor` (or `npm i cypress-waitfor`) and add it to your plugins.

Inside `cypress/support/commands.js` add:

```js
import 'cypress-waitfor';
```

## Release History

* 1.0.0 - First working version

## License

Copyright (c) Dominik Wilkowski.
Licensed under [GNU-GPLv3](https://raw.githubusercontent.com/https://github.com/dominikwilkowski/cypress-waitfor/master/LICENSE).

**[⬆ back to top](#contents)**

# };
