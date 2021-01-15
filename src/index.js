import readlineSync from 'readline-sync';

export function isEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

export function calc(str) {
  const [a, o, b] = str.split(' ');
  if (o === '+') {
    return Number(a) + Number(b);
  }
  if (o === '-') {
    return Number(a) - Number(b);
  }
  if (o === '*') {
    return Number(a) * Number(b);
  }
}

export function logic(question, arr, fun) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  for (const ar of arr) {
    console.log(`Question: ${ar}`);
    const answer = readlineSync.question('Your answer: ');
    const cAnswer = fun(ar);
    if (answer == cAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
