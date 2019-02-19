import test, { Macro } from 'ava';

import { min } from './min';

const defaultMin: Macro<[number[], number]> = (t, input, expected) => t.is(min()(input), expected);
const defaultMinReverse: Macro<[number[], number]> = (t, input, expected) =>
  defaultMin(t, input.reverse(), expected);
defaultMinReverse.title = title => `${title} (reversed)`;

test('numbers', [defaultMin, defaultMinReverse], [5, -99, 0, 33, -1], -99);
test('all negative', [defaultMin, defaultMinReverse], [-5, -99, -1, -33], -99);
test('all positive', [defaultMin, defaultMinReverse], [5, 99, 1, 33], 1);

interface Mapable {
  id: string;
  value: number;
}

type CompareMapable = (a: Mapable, b: Mapable) => number;

const mappedCollection: Mapable[] = [
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

const mapped: Macro<[CompareMapable, Mapable]> = (t, input, expected) =>
  t.deepEqual(min(input)(mappedCollection), expected);
mapped.title = title => `mapped, ${title}`;

test('subtract', mapped, ((a, b) => a.value - b.value) as CompareMapable, { id: 'b', value: -1 });

test(
  'gt, keep first occurrence',
  mapped,
  ((a, b) => (b.value > a.value ? -1 : 1)) as CompareMapable,
  {
    id: 'b',
    value: -1,
  },
);

test(
  'gt, keep last occurrence',
  mapped,
  ((a, b) => (a.value > b.value ? 1 : -1)) as CompareMapable,
  {
    id: 'd',
    value: -1,
  },
);

test(
  'lt, keep first occurrence',
  mapped,
  ((a, b) => (a.value < b.value ? -1 : 1)) as CompareMapable,
  {
    id: 'b',
    value: -1,
  },
);

test(
  'lt, keep last occurrence',
  mapped,
  ((a, b) => (b.value < a.value ? 1 : -1)) as CompareMapable,
  {
    id: 'd',
    value: -1,
  },
);
