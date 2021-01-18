import logic from '../index.js';
import { arrGen } from './even.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return 'no';
  return num > 1 ? 'yes' : 'no';
}

export default function prime() {
  return logic('Answer "yes" if given number is prime. Otherwise answer "no".', arrGen, isPrime);
}
