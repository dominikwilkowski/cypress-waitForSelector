waitfor
=======

> A zero-dependency plugin for [Cypress](https://www.cypress.io/) to wait for an element.

You sometimes have to wait for an animation, data loading or whatever before we can find an element on the page.
This plugin allows you to wait for an element using Cypress own select engine and Promise ecosystem.

## Usage

```js
describe('Test suite', () => {
  it('A test description', () => {
    cy.visit('http://localhost:3000');
    // The page does an animation or loading
    // so we now need to wait for an element
    // with the id `main-body`
    cy.waitFor('#main-body');
    // Now we have instant access to the #main-body element
    cy.get('#main-body').should('contain', 'Data loaded');
  });
});
```

The function `waitFor` takes either:
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
    cy.waitFor(() => {
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

* 1.1.0 - Added support for functions as first argument
* 1.0.0 - First working version

## License

Copyright (c) Dominik Wilkowski.
Licensed under [GNU-GPLv3](https://raw.githubusercontent.com/https://github.com/dominikwilkowski/cypress-waitfor/master/LICENSE).

**[⬆ back to top](#contents)**

# };
