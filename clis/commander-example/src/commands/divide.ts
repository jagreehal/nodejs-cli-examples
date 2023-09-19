import { Command } from 'commander';

export const divideCommand = new Command('divide')
  .arguments('<a> <b>')
  .action((a: string, b: string) => {
    if (Number(b) === 0) {
      console.error('Error: Division by zero.');
      return;
    }

    const result = Number(a) / Number(b);
    console.log(`The result of division is: ${result}`);
  })
  .addHelpText(`after`, `    
    'Example:'
      calculator divide 8 2
  `);
  