import { fromPrototype } from './util/fromPrototype';

interface Sort {
  <T>(compare?: (a: T, b: T) => number): (input: T[]) => T[];
}

/**
 * Sorts an array; just like the array prototype method, but curried.
 *
 * ## Example
 * ```javascript
 * import { sort } from '_ly';
 *
 * sort()([5, 3, 7, 9, 3, 3, 0]); // [0, 3, 3, 3, 5, 7, 9]
 * ```
 *
 * ### Custom Compare
 * ```javascript
 * const sortDesc = sort((a, b) => b - a);
 * sortDesc([5, 3, 7, 9, 3, 3, 0]); // [9, 7, 5, 3, 3, 3, 0]
 * ```
 *
 * @param {function(a: T, b: T): number} [compare]
 * @returns {function(input: T[]): T[]}
 */
export const sort: Sort = fromPrototype(Array.prototype.sort);
