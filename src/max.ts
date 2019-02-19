interface Compare<T> {
  (a: T, b: T): number;
}

const defaultCompare: Compare<any> = (a, b) => (a > b ? 1 : -1);

/**
 * Returns the minimum value in an array. By default, if any values are
 * compared as equivalent, the first one found will be returned.
 *
 * ## Example
 * ```javascript
 * import { max } from '_ly';
 *
 * max()([5, -99, 0, 33, -1]); // 33
 * ```
 *
 * ### Custom Compare
 * ```javascript
 * const items = [
 *   { id: 'a', value: 1 },
 *   { id: 'b', value: -1 },
 *   { id: 'c', value: 1 },
 * ];
 *
 * const highestValue = max((a, b) => a.value - b.value);
 * highestValue(items); // { id: 'a', value: 1 }
 * ```
 *
 * @param {function(a: T, b: T): number} [compare]
 * @returns {function(input: T[]): T}
 */
export const max = <T = number>(compare: Compare<T> = defaultCompare) => (input: T[]) =>
  input.reduce((a: T, b: T) => (compare(b, a) > 0 ? b : a));
