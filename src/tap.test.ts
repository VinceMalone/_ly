import test from 'ava';

import { tap } from './tap';

const input = Symbol('input');

test('invokes callback (with input) and passes input along', t => {
  const cb = () => t.pass();
  const result = tap(cb)(input);

  t.is(result, input);
  t.plan(2);
});

test('no callback', t => {
  t.is(tap()(input), input);
});
