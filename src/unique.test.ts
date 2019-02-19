import test from 'ava';

import { unique } from './unique';

test('primitives', t => {
  t.deepEqual(unique()([5, 4, 3, 4, 9, 9]), [5, 4, 3, 9]);
});

test('with mapping function', t => {
  const people = [
    { id: 1, name: 'Foo' },
    { id: 2, name: 'Foo' },
    { id: 3, name: 'Bar' },
    { id: 4, name: 'Foo' },
  ];

  t.deepEqual(unique((person: typeof people[number]) => person.name)(people), [
    { id: 1, name: 'Foo' },
    { id: 3, name: 'Bar' },
  ]);
});
