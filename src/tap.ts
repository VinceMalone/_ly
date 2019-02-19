import { noop } from './noop';

/**
 * Returns the input, but useful for performing side effects in a _pipeline_.
 *
 * ## Example
 * ```javascript
 * import { filter, map, maxBy, pipe, pluck, tap } from '_ly';
 *
 * const transform = pipe(
 *   map(withDates),
 *   filter(inThePast),
 *   tap(x => console.log(x)),
 *   maxBy(pluck('startDate')),
 * );
 * ```
 *
 * @param {function(source: T)} callback
 * @returns {function(input: T): T}
 */
export const tap = <T>(callback: (source: T) => any = noop) => (input: T): T => {
  callback(input);
  return input;
};
