/**
 * A function that _negates_ the result of the provided function.
 *
 * 🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation_(-)
 *
 * ## Example
 * ```javascript
 * const asc = (a, b) => a - b;
 * const desc = neg(asc);
 * ```
 *
 * @param {function(...args: any[]): any} predicate
 * @returns {function(...args: any[]): number}
 */
export const neg = <T extends (...args: any[]) => any>(predicate: T) => (...args: Parameters<T>) =>
  -predicate(...args);
