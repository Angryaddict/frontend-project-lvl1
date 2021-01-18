import logic from '../index.js';

function gcdc(str) {
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

function rndGcd() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 100);
    arr[i] = `${a} ${b}`;
  }
  return arr;
}

export default function gcd() {
  return logic('Find the greatest common divisor of given numbers.', rndGcd, gcdc);
}
