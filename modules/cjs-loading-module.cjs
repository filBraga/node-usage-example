const format = require('./cjs-creating-module.cjs'); // looks for a file exporting a module
const reverse = require('./cjs-main-module.cjs');
const pino = require('pino'); // looks for a directory with that name in the node_modules

const logger = pino();
logger.info('my-package started');
logger.info(format.upper('my-package started'));
logger.info(reverse('my-package started'));
