import test from 'ava';

import { minBy } from './minBy';
import { pluck } from './pluck';

test('with pluck', t => {
  const arr = [{ size: 2 }, { size: 99 }, { size: 1 }];
  t.deepEqual(minBy(pluck('size') as () => number)(arr), { size: 1 });
});

test('repeated values', t => {
  const arr = [
    {
      id: 'a',
      value: 1,
    },
    {
      id: 'b',
      value: -1,
    },
    {
      id: 'c',
      value: 1,
    },
    {
      id: 'd',
      value: -1,
    },
    {
      id: 'e',
      value: 1,
    },
  ];

  t.deepEqual(minBy(pluck('value') as () => number)(arr), { id: 'b', value: -1 });
});
