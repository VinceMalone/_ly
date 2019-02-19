import { neg } from './neg';

interface Compare<T> {
  (a: T, b: T): number;
}

const defaultCompare: Compare<any> = (a, b) => (a > b ? 1 : -1);

/**
 * Returns the maximum value in an array. By default, if any values are
 * compared as equivalent, the first one found will be returned.
 *
 * ## Example
 * ```javascript
 * import { min } from '_ly';
 *
 * min()([5, -99, 0, 33, -1]); // -99
 * ```
 *
 * ### Custom Compare
 * ```javascript
 * const items = [
 *   { id: 'a', value: -1 },
 *   { id: 'b', value: 1 },
 *   { id: 'c', value: -1 },
 * ];
 *
 * const lowestValue = min((a, b) => a.value - b.value);
 * lowestValue(items); // { id: 'a', value: -1 }
 * ```
 *
 * @param {function(a: T, b: T): number} [compare]
 * @returns {function(input: T[]): T}
 */
export const min = <T = number>(compare: Compare<T> = defaultCompare) => {
  const negCompare = neg(compare);
  return (input: T[]) => input.reduce((a, b) => (negCompare(b, a) > 0 ? b : a));
};
