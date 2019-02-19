import test from 'ava';

import { sort } from './sort';

test('default sort', t => {
  t.deepEqual(sort()([5, 3, 7, 1, 9, 3, 3, 0]), [0, 1, 3, 3, 3, 5, 7, 9]);
});

test('desc', t => {
  const sortDesc = sort((a: number, b: number) => b - a);
  t.deepEqual(sortDesc([5, 3, 7, 1, 9, 3, 3, 0]), [9, 7, 5, 3, 3, 3, 1, 0]);
});

test('no input', t => {
  const _sort = sort as any;
  t.throws(() => _sort()());
});
