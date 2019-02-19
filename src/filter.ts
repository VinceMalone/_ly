import { fromPrototype } from './util/fromPrototype';

interface Filter {
  <T, S extends T>(cb: (value: T, index: number, array: T[]) => value is S): (input: T[]) => S[];
  <T>(cb: (value: T, index: number, array: T[]) => any): (input: T[]) => T[];
}

/**
 * Filters an array; just like the array prototype method, but curried.
 *
 * ## Example
 * ```javascript
 * const takeEvens = filter(n => n % 2 === 0);
 * takeEvens([0, 1, 2, 3]); // [0, 2]
 * ```
 *
 * @param {function(value: T, index: number, array: T[]): any} predicate
 * @returns {function(input: T[]): T[]}
 */
export const filter: Filter = fromPrototype(Array.prototype.filter);
