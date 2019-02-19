import { min } from './min';

/**
 * Reduces an array down to the _first_ entry with the smallest _mapped_ value.
 *
 * ## Example
 * ```javascript
 * import { minBy, pluck } from '_ly';
 *
 * const entries = [
 *   { id: 1, startDate: Date.UTC(2000, 1, 14) },
 *   { id: 2, startDate: Date.UTC(2000, 1, 22) },
 *   { id: 3, startDate: Date.UTC(2000, 1, 10) },
 * ];
 *
 * const oldest = minBy(pluck('startDate'));
 * oldest(entries); // { id: 3, startDate: 950140800000 }
 * ```
 *
 * @param {function(entry: T): number} mapper
 * @returns {function(input: T[]): T}
 */
export const minBy = <T>(mapper: (entry: T) => number) =>
  min((a: T, b: T) => mapper(a) - mapper(b));
