#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import {
  addCommand,
  divideCommand,
  multiplyCommand,
  subtractCommand,
} from './commands';

const argv = yargs(hideBin(process.argv))
  .version('1.0.0')
  .scriptName('calculator')
  .usage('$0 <cmd> [args]')
  .demandCommand(1, '')
  .help()
  .alias('h', 'help')
  .wrap(72);

// Add the commands
addCommand(argv);
multiplyCommand(argv);
subtractCommand(argv);
divideCommand(argv);

argv.argv;
