import test from 'ava';

import { noop } from './noop';

test('noop does nothing', t => {
  t.is(noop(), undefined);
});
