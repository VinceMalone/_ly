import test from 'ava';

import { map } from './map';

const square = (n: number) => n ** 2;

test('map', t => {
  t.deepEqual(map(square)([2, 3]), [4, 9]);
});

test('no mapper', t => {
  const _map = map as any;
  t.throws(() => _map()([]));
});

test('no input', t => {
  const _map = map as any;
  t.throws(() => _map(square)());
});
