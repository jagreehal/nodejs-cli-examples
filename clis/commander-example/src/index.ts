#!/usr/bin/env node

import { Command } from 'commander';

import {
  addCommand,
  divideCommand,
  multiplyCommand,
  subtractCommand,
} from './commands';

const program = new Command();

program.addCommand(addCommand);
program.addCommand(multiplyCommand);
program.addCommand(subtractCommand);
program.addCommand(divideCommand);

// Show help if no arguments
process.argv.length <= 2 ? program.outputHelp() : program.parse(process.argv);
