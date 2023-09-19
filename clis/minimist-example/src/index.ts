#!/usr/bin/env node

import minimist from 'minimist';
import {
  addCommand,
  divideCommand,
  multiplyCommand,
  subtractCommand,
} from './commands';

const argv = minimist(process.argv.slice(2));

if (argv._.length === 0) {
  console.log('CLI Calculator: A simple calculator for the command line.');
  process.exit(0);
}

const command = argv._[0];
const args = argv._.slice(1);

const commandMap: { [key: string]: (args: string[]) => void } = {
  add: addCommand,
  multiply: multiplyCommand,
  subtract: subtractCommand,
  divide: divideCommand,
};

const commandFunction = commandMap[command];
if (commandFunction) {
  commandFunction(args);
} else {
  console.log(`Unknown command: ${command}`);
}
