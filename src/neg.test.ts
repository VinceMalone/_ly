import test from 'ava';

import { neg } from './neg';
import { makeIsMacro } from './util/macro';

const identity = makeIsMacro('neg(identity)', neg(x => x));

test(identity, '1', '-1');
test(identity, '-1', '1');
test(identity, '0', '-0');
test(identity, '-0', '0');
test(identity, '3.145', '-3.145');
test(identity, 'undefined', 'NaN');
test(identity, 'null', '-0');
test(identity, 'NaN', 'NaN');
test(identity, 'true', '-1');
test(identity, 'false', '-0');
test(identity, '"test"', 'NaN');
test(identity, '""', '-0');
test(identity, '{}', 'NaN');
test(identity, '[]', '-0');
test(identity, '() => {}', 'NaN');
