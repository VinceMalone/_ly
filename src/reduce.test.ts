import test from 'ava';

import { reduce } from './reduce';

const cb = (a: number, b: number) => a + b;
const arr = [1, 2, 3];

test('without seed', t => {
  t.is(reduce(cb)(arr), 6);
});

test('with seed', t => {
  t.is(reduce(cb, 10)(arr), 16);
});
