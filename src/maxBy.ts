import { max } from './max';

/**
 * Reduces an array down to the _first_ entry with the largest _mapped_ value.
 *
 * ## Example
 * ```javascript
 * import { maxBy, pluck } from '_ly';
 *
 * const entries = [
 *   { id: 1, startDate: Date.UTC(2000, 1, 14) },
 *   { id: 2, startDate: Date.UTC(2000, 1, 22) },
 *   { id: 3, startDate: Date.UTC(2000, 1, 10) },
 * ];
 *
 * const latest = maxBy(pluck('startDate'));
 * latest(entries); // { id: 2, startDate: 951177600000 }
 * ```
 *
 * @param {function(entry: T): number} mapper
 * @returns {function(input: T[]): T}
 */
export const maxBy = <T>(mapper: (entry: T) => number) =>
  max((a: T, b: T) => mapper(a) - mapper(b));
