import logic from '../index.js';

function calcGen() {
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

function calcy(str) {
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

export default function calc() {
  return logic('What is the result of the expression?', calcGen, calcy);
}
