import { Command } from 'commander';

export const multiplyCommand = new Command('multiply')
  .arguments('<numbers...>')
  .action((numbers: string[]) => {
    const result = numbers.map(Number).reduce((accumulator, number) => {
      return accumulator * number;
    }, 1);
    console.log(`The result of multiplication is: ${result}`);
  })
  .addHelpText(`after`, `    
    'Example:'
      calculator multiply 2 3 4
  `);  
