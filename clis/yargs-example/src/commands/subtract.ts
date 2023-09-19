import { Argv } from 'yargs';

export function subtractCommand(yargs: Argv): Argv {
  return yargs.command(
    'divide <a> <b>',
    'Divide one number by another.',
    {},
    ({ a, b }) => {
      if (Number(b) === 0) {
        console.error('Error: Division by zero.');
        return;
      }
      const result = Number(a) / Number(b);
      console.log(`The result of division is: ${result}`);
    },
  );
}
