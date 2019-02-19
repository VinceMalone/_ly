/**
 * Creates a curried (and therefore pipeable) function from a native prototype method.
 *
 * ## Example
 * ```javascript
 * import { fromPrototype, pipe } from '_ly';
 *
 * const toUpper = fromPrototype(String.prototype.toUpperCase);
 * const padEnd = fromPrototype(String.prototype.padEnd);
 *
 * const logAsGroupHeading = pipe(
 *   toUpper(),
 *   padEnd(80, '-'),
 *   console.log,
 * );
 * ```
 *
 * @param {Function} method - A prototype method such as `Number.prototype.toFixed`.
 * @returns {(...args: any[]) => (input: any) => any}
 */
export const fromPrototype = <T, F extends (...args: any[]) => any>(method: F) => <U extends T>(
  ...args: Parameters<F>
) => (input: U): ReturnType<F> => method.apply(input, args);
