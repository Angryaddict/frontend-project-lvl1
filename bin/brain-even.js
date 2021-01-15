#!/usr/bin/env node
import { isEven, logic } from '../src/index.js';

logic('Answer "yes" if the number is even, otherwise answer "no".', [15, 6, 7], isEven);
