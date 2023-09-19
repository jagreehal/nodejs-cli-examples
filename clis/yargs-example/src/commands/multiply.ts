import { Argv } from 'yargs';

export function multiplyCommand(yargs: Argv): Argv {
  return yargs.command(
    'multiply <numbers...>',
    'Multiply two or more numbers.',
    {},
    ({ numbers }) => {
      const mappedNumbers: number[] = numbers.map(Number);
      const result = mappedNumbers.reduce((acc, num) => acc * num, 1);
      console.log(`The result of multiplication is: ${result}`);
    },
  );
}
