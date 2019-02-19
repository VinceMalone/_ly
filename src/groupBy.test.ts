import test from 'ava';

import { groupBy } from './groupBy';
import { pluck } from './pluck';

const grades = [
  { id: 1, grade: 'B' },
  { id: 2, grade: 'A' },
  { id: 3, grade: 'F' },
  { id: 4, grade: 'F' },
  { id: 5, grade: 'B' },
];

test('map the key the group by', t => {
  t.deepEqual(
    groupBy(pluck('grade'))(grades) as any,
    new Map([
      ['B', [{ id: 1, grade: 'B' }, { id: 5, grade: 'B' }]],
      ['A', [{ id: 2, grade: 'A' }]],
      ['F', [{ id: 3, grade: 'F' }, { id: 4, grade: 'F' }]],
    ]),
  );
});

test('map the key and value', t => {
  t.deepEqual(
    groupBy(pluck('grade'), pluck('id'))(grades) as any,
    new Map([['B', [1, 5]], ['A', [2]], ['F', [3, 4]]]),
  );
});

test('map only the value', t => {
  t.deepEqual(
    groupBy(undefined, (x: string) => x.toUpperCase())(['a', 'z', 'a']),
    new Map([['a', ['A', 'A']], ['z', ['Z']]]),
  );
});

test('no mappers', t => {
  t.deepEqual(groupBy()([3, 5, 5, 1]), new Map([[3, [3]], [5, [5, 5]], [1, [1]]]));
});

test('reusing the same `groupBy` instance', t => {
  const groupByLetter = groupBy();
  t.deepEqual(groupByLetter([true]), new Map([[true, [true]]]));
  t.deepEqual(groupByLetter([false]), new Map([[false, [false]]]));
});

test('no input', t => {
  const _groupBy = groupBy as any;
  t.throws(() => _groupBy()());
});
