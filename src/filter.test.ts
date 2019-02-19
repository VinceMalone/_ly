import test from 'ava';

import { filter } from './filter';

test('filter', t => {
  t.deepEqual(filter(Boolean)([true, false]), [true]);
});

test('no predicate', t => {
  const _filter = filter as any;
  t.throws(() => _filter()([]));
});

test('no input', t => {
  const _filter = filter as any;
  t.throws(() => _filter(Boolean)());
});
