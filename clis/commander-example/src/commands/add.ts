import { Command } from 'commander';

export const addCommand = new Command('add')
  .arguments('<numbers...>')
  .action(async (numbers: string[]) => {
    await new Promise(r => setTimeout(r, 2000));
    const result = numbers.map(Number).reduce((accumulator, number) => {
      return accumulator + number;
    }, 0);
    console.log(`The result of addition is: ${result}`);
  })
  .addHelpText(`after`, `    
    'Examples:'
      calculator add 5 6 7
  `);
