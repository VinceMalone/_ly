import { Macro } from 'ava';

export const makeIsMacro = (title: string, fn: (...args: any[]) => any) => {
  const macro: Macro<[string, string]> = (t, input, expected) =>
    t.is(fn(eval(`(${input})`)), eval(`(${expected})`)); // tslint:disable-line:no-eval
  macro.title = (_, input, expected) => `${title}(${input}) // ${expected}`;
  return macro;
};
