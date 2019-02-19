import test from 'ava';

import { chunk } from './chunk';

test('when input is empty', t => {
  t.deepEqual(chunk(1)([]), []);
});

test('when input size is less than buffer size', t => {
  t.deepEqual(chunk(3)([1, 2]), [[1, 2]]);
});

test('remainder chunk', t => {
  t.deepEqual(chunk(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]]);
});

test('enforce a buffer size that is greater than 0', t => {
  const _chunk = chunk as any;
  t.throws(() => _chunk(-1));
  t.throws(() => _chunk(0));
  t.throws(() => _chunk());
});

test('input must be an array', t => {
  const _chunk = chunk as any;
  t.throws(() => _chunk(5)());
});
