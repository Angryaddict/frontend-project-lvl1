import logic from '../index.js';

function isEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

function arrGen() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr[i] = Math.ceil(Math.random() * 100);
  }
  return arr;
}

export default function even() {
  return logic('Answer "yes" if the number is even, otherwise answer "no".', arrGen, isEven);
}
