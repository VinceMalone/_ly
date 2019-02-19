import test, { Macro } from 'ava';

import { identity } from './identity';

const is: Macro<[any]> = (t, input) => t.is(identity(input), input);

test('non-primitive', is, {});
test('primitive', is, 5);
test('undefined', is, undefined);
