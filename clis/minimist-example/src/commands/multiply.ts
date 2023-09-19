import minimist from 'minimist';

export function multiplyCommand(args: string[]): void {
  const parsedArgs = minimist(args);

  if (args.length === 0 || parsedArgs.h || parsedArgs.help) {
    showHelp();
    return;
  }

  const numbers = args.map(Number);
  const result = numbers.reduce((acc, num) => acc * num, 1);
  console.log(`The result of multiplication is: ${result}`);
}

function showHelp() {
  console.log(`
Usage:
  multiply <numbers...>  - Multiply two or more numbers.
Example:
  $ calculator multiply 2 3 4
  `);
}
