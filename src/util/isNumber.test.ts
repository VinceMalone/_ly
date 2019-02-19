import test from 'ava';

import { isNumber } from './isNumber';
import { makeIsMacro } from './macro';

const is = makeIsMacro('isNumber', isNumber);

test(is, '1', 'true');
test(is, '-1', 'true');
test(is, '0', 'true');
test(is, '-0', 'true');
test(is, '3.145', 'true');
test(is, 'Math.PI', 'true');
test(is, '0b10', 'true'); // binary
test(is, '0o10', 'true'); // octal
test(is, '0x10', 'true'); // hexadecimal
test(is, '1e10', 'true'); // exponential
test(is, 'Number.MAX_VALUE', 'true');
test(is, 'Number.MIN_VALUE', 'true');
test(is, '9007199254740992n', 'false');
test(is, 'Infinity', 'false');
test(is, '-Infinity', 'false');
test(is, 'NaN', 'false');
test(is, 'undefined', 'false');
test(is, 'null', 'false');
test(is, 'true', 'false');
test(is, 'false', 'false');
test(is, '""', 'false');
test(is, '"test"', 'false');
test(is, '"5"', 'false');
test(is, '{}', 'false');
test(is, '[]', 'false');
test(is, '() => {}', 'false');
test(is, 'new Date()', 'false');
