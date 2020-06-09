# is-its-over-9000
Return true if given number is over 9000

Installation and Usage
----------------------

is-its-over-9000 supports stable versions of Node.js 8.15.0 and later. You can install
is-its-over-9000 globally or in your project's `node_modules` folder.

To install the latest version on npm globally (might require `sudo`;
[learn how to fix this](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)):

    npm install -i is-its-over-9000


## usage
    var isItsOver9000 = require("is-its-over-9000")
    var num1 = 9999;
    var num2 = 8000;
    var result1 = isItsOver9000(num1); // return true
    var result2 = isItsOver9000(num2); // return false
    console.log(result1);
    console.log(result2);

