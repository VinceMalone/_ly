import test from 'ava';

import { pipe } from './pipe';

test('piped', t => {
  const trim = (input: string) => String.prototype.trim.apply(input);
  const capitalize = (input: string) => input.charAt(0).toUpperCase() + input.slice(1);
  const wrap = (before: string, after: string) => (input: string) => `${before}${input}${after}`;
  const inParentheses = wrap('(', ')');

  const source = ' test ';
  const piped = pipe(
    trim,
    capitalize,
    inParentheses,
  );

  t.is(piped(source), inParentheses(capitalize(trim(source))));
  t.is(piped(source), '(Test)');
  t.is(piped('a'), '(A)');
});

test('ltr', t => {
  const fn1 = (val: string) => `fn1(${val})`;
  const fn2 = (val: string) => `fn2(${val})`;
  const fn3 = (val: string) => `fn3(${val})`;
  const piped = pipe(
    fn1,
    fn2,
    fn3,
  );
  t.is(piped('x'), 'fn3(fn2(fn1(x)))');
});

test('no functions; return the input', t => {
  const input = {};
  t.is(pipe()(input), input);
});
