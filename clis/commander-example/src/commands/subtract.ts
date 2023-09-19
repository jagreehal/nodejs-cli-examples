import { Command } from 'commander';

export const subtractCommand = new Command('subtract')
  .arguments('<a> <b>')
  .action((a: string, b: string) => {
    const result = Number(a) - Number(b);
    console.log(`The result of subtraction is: ${result}`);
  })
  .addHelpText(`after`, `    
    'Example:'
      calculator subtract 9 4
  `);
