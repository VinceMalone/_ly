import test from 'ava';

import { not } from './not';
import { makeIsMacro } from './util/macro';

const identity = makeIsMacro('not(identity)', not(x => x));

test(identity, 'true', 'false');
test(identity, 'false', 'true');
test(identity, 'undefined', 'true');
test(identity, 'null', 'true');
test(identity, 'NaN', 'true');
test(identity, '1', 'false');
test(identity, '-1', 'false');
test(identity, '0', 'true');
test(identity, '-0', 'true');
test(identity, '"test"', 'false');
test(identity, '""', 'true');
test(identity, '{}', 'false');
test(identity, '[]', 'false');
test(identity, '() => {}', 'false');
