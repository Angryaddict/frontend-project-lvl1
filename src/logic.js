import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export default function even() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const arr = [15, 6, 7];
  for (const ar of arr) { // eslint-disable-line
    console.log(`Question: ${ar}`);
    const answer = readlineSync.question('Your answer: ');
    const cAnswer = isEven(ar) ? 'yes' : 'no';
    if (answer === cAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
