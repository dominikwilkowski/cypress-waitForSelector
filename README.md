waitForSelector
=======

> A zero-dependency plugin for [Cypress](https://www.cypress.io/) to wait for an element.

You sometimes have to wait for an animation, data loading or whatever before we can find an element on the page.
This plugin allows you to wait for an element using Cypress own select engine and Promise ecosystem.
Cypress comes with a [`get` method](https://docs.cypress.io/api/commands/get.html#Arguments) which will wait for a timeout before failing which works most of
the time as long as you use that method.
If you need to use the [jQuery selector](https://docs.cypress.io/api/utilities/$.html) or non-cypress methods you need to wait manually.
This is where this plugin comes in.

## Usage

```js
describe('Test suite', () => {
  it('A test description', () => {
    cy.visit('http://localhost:3000');
    // The page does an animation or loading
    // so we now need to wait for an element
    // with the id `main-body`
    cy.waitForSelector('#main-body');
    // Now we have instant access to the #main-body element
    const body = Cypress.$('#main-body title').attr('data-body');
  });
});
```

The function `waitForSelector` takes either:
- a selector string that will just be passed down to `Cypress.$`. 
	So you can use any valid [jQuery selector](https://api.jquery.com/jQuery/).
- a function that returns a boolean

```js
describe('Test suite', () => {
  it('A test description', () => {
    cy.visit('http://localhost:3000');
    // The page does an animation or loading
    // so we now need to wait for localStorage
    // to populate
    cy.waitForSelector(() => {
      const localData = localStorage.getItem('myData');
      return localData !== null;
    });
    // Now we know from now on our localStorage is available
  });
});
```

## Options

The plugin also takes an optional options object:

```js
cy.waitForSelector('#main-body', {
  timeout: 200, // The time in ms to poll for changes
  tries: 300,   // How many times to try before failing
                // 300 tries at 200ms timeout = 1min
});
```

## Install

Install the plugin via `yarn add cypress-waitforselector` (or `npm i cypress-waitforselector`) and add it to your plugins.

Inside `cypress/support/commands.js` add:

```js
import 'cypress-waitforselector';
```

## Release History

* 1.2.0 - Renamed package
* 1.1.0 - Added support for functions as first argument
* 1.0.0 - First working version

## License

Copyright (c) Dominik Wilkowski.
Licensed under [GNU-GPLv3](https://raw.githubusercontent.com/https://github.com/dominikwilkowski/cypress-waitforselector/master/LICENSE).

**[⬆ back to top](#contents)**

# };
