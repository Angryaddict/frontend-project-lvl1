import readlineSync from 'readline-sync';

export function isEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

export function arrGen() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr[i] = Math.ceil(Math.random() * 100);
  }
  return arr;
}

export function calcGen() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 100);
    const op = Math.floor(Math.random() * 3);
    let o = '';
    if (op === 0) {
      o = '+';
    }
    if (op === 1) {
      o = '-';
    }
    if (op === 2) {
      o = '*';
    }
    arr[i] = `${a} ${o} ${b}`;
  }
  return arr;
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

export function gcd(str) {
  const [a, b] = str.split(' ');
  const x = Number(a);
  const y = Number(b);
  function gcd1(n, m) {
    if (m > n) return gcd1(m, n);
    if (!m) return n;
    return gcd1(m, n % m);
  }
  return gcd1(x, y);
}

export function rndGcd() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 100);
    arr[i] = `${a} ${b}`;
  }
  return arr;
}

export function logic(question, gen, fun) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  const arr = gen();
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
