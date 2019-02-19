/**
 * A function that inverses the result of the provided function.
 *
 * ## Example
 * ```javascript
 * const isEven = n => n % 2 === 0;
 * const takeOdds = filter(not(isEven));
 * takeOdds([0, 1, 2, 3]); // [1, 3]
 * ```
 *
 * @param {function(...args: any[]): any} predicate
 * @returns {function(...args: any[]): boolean}
 */
export const not = <T extends (...args: any[]) => any>(predicate: T) => (...args: Parameters<T>) =>
  !predicate(...args);
