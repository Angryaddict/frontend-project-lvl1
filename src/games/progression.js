import logic from '../index.js';

function gen() {
  const arr = [];
  const delta = Math.floor(Math.random() * 9) + 1;
  const begin = Math.floor(Math.random() * 20) + 1;
  const blind = Math.floor(Math.random() * 10);
  arr[0] = begin;
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + delta;
  }
  arr[blind] = '..';
  return arr.join(' ');
}
function genAll() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr[i] = gen();
  }
  return arr;
}
function prog(str) {
  const arr = str.split(' ');
  const blind = arr.indexOf('..');
  let result = 0;
  if (blind >= 5) {
    result = Number(arr[blind - 1]) + Number(arr[blind - 1]) - Number(arr[blind - 2]);
  } else {
    result = Number(arr[blind + 1]) - (Number(arr[blind + 2]) - Number(arr[blind + 1]));
  }
  return result;
}

export default function progression() {
  return logic('What number is missing in the progression?', genAll, prog);
}
