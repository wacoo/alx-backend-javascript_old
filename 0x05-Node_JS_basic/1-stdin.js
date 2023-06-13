/* write a program that accepts input with stdin */

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
