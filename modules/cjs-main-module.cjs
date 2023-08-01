// If it is loaded as a module, it will export a function that reverses and upper-cases a string:

// But if it's executed with node, it will exhibit the original behavior:

'use strict';
const format = require('./cjs-creating-module.cjs');

if (require.main === module) {
    const pino = require('pino');
    const logger = pino();
    logger.info(format.upper('my-package started'));
    process.stdin.resume();
} else {
    const reverseAndUpper = (str) => {
        return format.upper(str).split('').reverse().join('');
    };
    module.exports = reverseAndUpper;
}
