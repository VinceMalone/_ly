import test, { Macro } from 'ava';

import { pluck } from './pluck';

test('mapping an array', t => {
  const ids = [{ id: 1 }, { id: 3 }, { id: 17 }];
  t.deepEqual(ids.map(pluck('id')), [1, 3, 17]);
});

const pluckDeep: Macro<[any, any]> = (t, input, expected) =>
  t.is(pluck('a', 'b', 'c')(input), expected);
pluckDeep.title = title => `multiple keys, ${title}`;

test('return nested value', pluckDeep, { a: { b: { c: 5 } } }, 5);
test("key doesn't exist", pluckDeep, { a: { b: {} } }, undefined);
test("key doesn't exist (array)", pluckDeep, [], undefined);
test("parent isn't an object", pluckDeep, { a: null }, undefined);
test("parent isn't an object (undefined)", pluckDeep, undefined, undefined);
test('when null', pluckDeep, { a: { b: { c: null } } }, null);
test('when undefined', pluckDeep, { a: { b: { c: undefined } } }, undefined);

test('enforce one or more keys to be specified', t => {
  t.throws(() => pluck());
});
