import minimist from 'minimist';

export function divideCommand(args: string[]): void {
  const parsedArgs = minimist(args);

  if (args.length < 2 || parsedArgs.h || parsedArgs.help) {
    showHelp();
    return;
  }

  const [a, b] = args.map(Number);
  if (b === 0) {
    console.error('Error: Division by zero.');
    return;
  }
  console.log(`The result of division is: ${a / b}`);
}

function showHelp() {
  console.log(`
Usage:
  divide <a> <b>  - Divide number a by b.
Example:
  $ calculator divide 8 2
  `);
}
