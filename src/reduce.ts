import { fromPrototype } from './util/fromPrototype';

interface Reduce {
  <T>(cb: (acc: T, curr: T, index: number, arr: T[]) => T): (input: T[]) => T;
  <T>(cb: (acc: T, curr: T, index: number, arr: T[]) => T, initial: T): (input: T[]) => T;
  <T, U>(cb: (acc: T, curr: T, index: number, arr: T[]) => U, initial: U): (input: T[]) => U;
}

/**
 * Reduces an array; just like the array prototype method, but curried.
 *
 * ## Example
 * ```javascript
 * const sum = reduce((total, n) => total + n, 0);
 * sum([0, 1, 2, 3]); // 6
 * ```
 *
 * @param {function(acc: T, curr: T, index: number, arr: T[]): U} cb
 * @param {U} [seed]
 * @returns {function(input: T[]): U}
 */
export const reduce: Reduce = fromPrototype(Array.prototype.reduce) as any;
