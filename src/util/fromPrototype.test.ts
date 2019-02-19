import test from 'ava';

import { fromPrototype } from './fromPrototype';

const join = fromPrototype(Array.prototype.join);
const trim = fromPrototype(String.prototype.trim);

test('array', t => {
  const joinWithPipes = join('|');
  const input = ['a', 'b'];

  t.is(joinWithPipes(input), input.join('|'));
  t.is(joinWithPipes(['-', '-']), '-|-');
});

test('string', t => {
  const trimAll = trim();
  const input = ' \n Q \n ';

  t.is(trimAll(input), input.trim());
  t.is(trimAll(input), 'Q');
  t.is(trimAll('       .       '), '.');
});
