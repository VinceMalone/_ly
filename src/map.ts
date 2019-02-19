import { fromPrototype } from './util/fromPrototype';

interface Map {
  <T, U>(cb: (value: T, index: number, array: T[]) => U): (input: T[]) => U[];
}

/**
 * Maps an array; just like the array prototype method, but curried.
 *
 * ## Example
 * ```javascript
 * const cube = map(n => n ** 3);
 * cube([0, 1, 2, 3]); // [0, 1, 8, 27]
 * ```
 *
 * @param {function(value: T, index: number, array: T[]): U} mapper
 * @returns {function(input: T[]): U[]}
 */
export const map: Map = fromPrototype(Array.prototype.map) as any;
