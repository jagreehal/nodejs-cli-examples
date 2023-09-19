import { Argv } from 'yargs';

export function addCommand(yargs: Argv): Argv {
  return yargs.command(
    'add <numbers...>',
    'Add two or more numbers.',
    {},
    async ({ numbers }) => {
      await new Promise((r) => setTimeout(r, 2000));
      const mappedNumbers: number[] = numbers.map(Number);
      const result = mappedNumbers.reduce((acc, num) => acc + num, 0);
      console.log(`The result of addition is: ${result}`);
    },
  );
}
