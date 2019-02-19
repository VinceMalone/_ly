import test from 'ava';

import { flatten } from './flatten';

test('flat', t => {
  t.deepEqual(flatten()([1, [2, 3], [[4]]]), [1, 2, 3, [4]]);
});

test('no input', t => {
  const _flatten = flatten as any;
  t.deepEqual(_flatten()(), []);
});
