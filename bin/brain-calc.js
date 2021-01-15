#!/usr/bin/env node
import { calc, logic } from '../src/index.js';

logic('What is the result of the expression?', ['15 + 6', '5 * 5', '45 - 45'], calc);
