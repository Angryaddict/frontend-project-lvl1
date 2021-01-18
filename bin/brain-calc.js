#!/usr/bin/env node
import { calc, logic, calcGen } from '../src/index.js';

logic('What is the result of the expression?', calcGen, calc);
