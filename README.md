# is-its-over-9000

![Meme](./meme.webp)

Return true if given number is over 9000

Installation and Usage
----------------------

is-its-over-9000 supports stable versions of Node.js 8.15.0 and later. You can install
is-its-over-9000 globally or in your project's `node_modules` folder.

To install the latest version on npm globally (might require `sudo`;
[learn how to fix this](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)):

    npm install -i is-its-over-9000


## Usage

```js
const isItsOver9000 = require("is-its-over-9000");

const num1 = 9999;
const num2 = 8000;

console.log(isItsOver9000(num1)); // true
console.log(isItsOver9000(num2)); // false
```

## Testing

Run the test suite:

```bash
npm test
```

