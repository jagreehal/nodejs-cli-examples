import minimist from 'minimist';

export function addCommand(args: string[]): void {
  const parsedArgs = minimist(args);
  if (args.length === 0 || parsedArgs.h || parsedArgs.help) {
    showHelp();
    return;
  }

  const numbers = args.map(Number);
  const result = numbers.reduce((acc, num) => acc + num, 0);
  console.log(`The result of addition is: ${result}`);
}

function showHelp() {
  console.log(`
Usage:
  add <numbers...>  - Add two or more numbers.
Example:
  $ calculator add 5 6 7
  `);
}
