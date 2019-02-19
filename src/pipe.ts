// prettier-ignore
interface Pipe {
  <A>(): (a: A) => A;
  <A, B>(ab: (a: A) => B): (a: A) => B;
  <A, B, C>(ab: (a: A) => B, bc: (b: B) => C): (a: A) => C;
  <A, B, C, D>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): (a: A) => D;
  <A, B, C, D, E>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): (a: A) => E;
  <A, B, C, D, E, F>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F): (a: A) => F;
  <A, B, C, D, E, F, G>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G): (a: A) => G;
  <A, B, C, D, E, F, G, H>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H): (a: A) => H;
  <A, B, C, D, E, F, G, H, I>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I): (a: A) => I;
  <A, B, C, D, E, F, G, H, I>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ...z: Array<(...args: any[]) => any>): (a: A) => {};
}

/**
 * Combine _n_ functions. When invoked, the pipe flows left-to-right, calling
 * each function with the output of the last one.
 *
 * ## Example
 * ```javascript
 * import { map, pipe, reduce } from '_ly';
 *
 * const transform = pipe(
 *   map(n => n ** 3),
 *   reduce((total, n) => total + n, 0),
 *   n => n.toFixed(2),
 * );
 *
 * transform([0, 1, 2, 3]); // '35.00'
 * ```
 *
 * @param {...function(input: any): any} fns
 * @returns {function(input: any): any}
 */
export const pipe: Pipe = (...fns: ((input: any) => any)[]) => (input: any) =>
  fns.reduce((value, fn) => fn(value), input);
