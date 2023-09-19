import minimist from 'minimist';

export function subtractCommand(args: string[]): void {
  const parsedArgs = minimist(args);

  if (args.length < 2 || parsedArgs.h || parsedArgs.help) {
    showHelp();
    return;
  }

  const [a, b] = args.map(Number);
  console.log(`The result of subtraction is: ${a - b}`);
}

function showHelp() {
  console.log(`
Usage:
  subtract <a> <b>  - Subtract number b from a.
Example:
  $ calculator subtract 9 4
  `);
}
