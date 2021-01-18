#!/usr/bin/env node
import { isEven, logic, arrGen } from '../src/index.js';

logic('Answer "yes" if the number is even, otherwise answer "no".', arrGen, isEven);
