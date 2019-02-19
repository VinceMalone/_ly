/**
 * Splits the source array into two, one with values that satisfy a predicate,
 * and another with values that don't satisfy the predicate.
 *
 * ℹ️ It's like filter, but returns two arrays: one like the output
 *    of {@link filter}, and the other with values that did not pass the
 *    condition.
 *
 * `partition` outputs an array with two arrays that partition the values from
 * the source array through the given `predicate` function. The first array in
 * that array contains source values for which the predicate argument returns
 * true. The second array contains source values for which the predicate
 * returns false. The first behaves like {@link filter} and the second behaves
 * like {@link filter} with the predicate negated.
 *
 * ## Example
 * ```javascript
 * import { partition } from '_ly';
 *
 * const splitEvensAndOdds = partition(n => n % 2 === 0);
 * const [evens, odds] = splitEvensAndOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 * ```
 *
 * @param {function(value: T, index: number): boolean} predicate
 * @returns {function(input: T[]): [T[], T[]]}
 */
export const partition = <T>(predicate: (value: T, index: number) => boolean) => {
  if (typeof predicate !== 'function') {
    throw new Error('[_ly/partition] A `predicate` function must be provided.');
  }

  return (input: T[]) =>
    input.reduce(
      (output, value, index) => {
        output[predicate(value, index) ? 0 : 1].push(value);
        return output;
      },
      [[], []] as [T[], T[]],
    );
};
