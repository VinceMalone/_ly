import test from 'ava';

import { not } from './not';
import { partition } from './partition';

test('split numbers 0-9 into two (even and odd) arrays', t => {
  t.deepEqual(partition((n: number) => n % 2 === 0)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [
    [0, 2, 4, 6, 8],
    [1, 3, 5, 7, 9],
  ]);
});

test('all true', t => {
  t.deepEqual(partition(Boolean)([1, 2]), [[1, 2], []]);
});

test('all false', t => {
  t.deepEqual(partition(not(Boolean))([1, 2]), [[], [1, 2]]);
});

test('empty', t => {
  t.deepEqual(partition(Boolean)([]), [[], []]);
});

test('enforce a predicate function', t => {
  const _partition = partition as any;
  t.throws(() => _partition());
});

test('input not reducible', t => {
  const _partition = partition as any;
  t.throws(() => _partition(Boolean)());
});
