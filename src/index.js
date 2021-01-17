import readlineSync from 'readline-sync';

export function isEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

export function calc(str) {
  const [a, o, b] = str.split(' ');
  let result = 0;
  if (o === '+') {
    result = Number(a) + Number(b);
  }
  if (o === '-') {
    result = Number(a) - Number(b);
  }
  if (o === '*') {
    result = Number(a) * Number(b);
  }
  return result;
}

export function logic(question, arr, fun) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  for (const ar of arr) { // eslint-disable-line
    console.log(`Question: ${ar}`);
    const answer = readlineSync.question('Your answer: ');
    const cAnswer = fun(ar);
    if (answer == cAnswer) { // eslint-disable-line
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
