import { upper } from './mjs-creating-module.mjs';
import pino from 'pino';

const logger = pino();
logger.info('my-package started');
logger.info(upper('my-package started'));
