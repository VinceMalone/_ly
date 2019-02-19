import test, { Macro } from 'ava';

import { max } from './max';

const defaultMax: Macro<[number[], number]> = (t, input, expected) => t.is(max()(input), expected);
const defaultMaxReverse: Macro<[number[], number]> = (t, input, expected) =>
  defaultMax(t, input.reverse(), expected);
defaultMaxReverse.title = title => `${title} (reversed)`;

test('numbers', [defaultMax, defaultMaxReverse], [5, -99, 0, 33, -1], 33);
test('all negative', [defaultMax, defaultMaxReverse], [-5, -99, -1, -33], -1);
test('all positive', [defaultMax, defaultMaxReverse], [5, 99, 1, 33], 99);

interface Mapable {
  id: string;
  value: number;
}

type CompareMapable = (a: Mapable, b: Mapable) => number;

const mappedCollection: Mapable[] = [
  {
    id: 'a',
    value: -1,
  },
  {
    id: 'b',
    value: 1,
  },
  {
    id: 'c',
    value: -1,
  },
  {
    id: 'd',
    value: 1,
  },
  {
    id: 'e',
    value: -1,
  },
];

const mapped: Macro<[CompareMapable, Mapable]> = (t, input, expected) =>
  t.deepEqual(max(input)(mappedCollection), expected);
mapped.title = title => `mapped, ${title}`;

test('subtract', mapped, ((a, b) => a.value - b.value) as CompareMapable, { id: 'b', value: 1 });

test(
  'gt, keep first occurrence',
  mapped,
  ((a, b) => (a.value > b.value ? 1 : -1)) as CompareMapable,
  {
    id: 'b',
    value: 1,
  },
);

test(
  'gt, keep last occurrence',
  mapped,
  ((a, b) => (b.value > a.value ? -1 : 1)) as CompareMapable,
  {
    id: 'd',
    value: 1,
  },
);

test(
  'lt, keep first occurrence',
  mapped,
  ((a, b) => (b.value < a.value ? 1 : -1)) as CompareMapable,
  {
    id: 'b',
    value: 1,
  },
);

test(
  'lt, keep last occurrence',
  mapped,
  ((a, b) => (a.value < b.value ? -1 : 1)) as CompareMapable,
  {
    id: 'd',
    value: 1,
  },
);
