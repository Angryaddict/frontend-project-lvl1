import readlineSync from 'readline-sync';

export function isEven (num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

export function logic (question, arr, fun) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  //const arr = [15, 6, 7];
  for (const ar of arr) {
    console.log(`Question: ${ar}`);
    const answer = readlineSync.question('Your answer: ');
    const cAnswer = fun(ar);
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
