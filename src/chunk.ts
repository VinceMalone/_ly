import { isNumber } from './util/isNumber';

/**
 * Group items of an array in arrays with a length of the provided `size` (or
 * until the input array is exhausted.)
 *
 * ## Example
 * ```javascript
 * import { chunk } from '_ly';
 *
 * const pair = chunk(2);
 * pair([1, 2, 3, 4, 5]); // [[1, 2], [3, 4], [5]]
 * ```
 *
 * @param {number} size - ⚠️ Must be a number greater than 0.
 * @returns {function(input: T[]): T[][]}
 */
export const chunk = (size: number) => {
  if (!isNumber(size) || size < 1) {
    throw new Error(
      "[_ly/chunk] Well that's embarrassing, you almost caused an infinite loop... `size` must be a number greater than 0.",
    );
  }

  return <T>(input: T[]) => {
    const output = [];
    for (let i = 0; i < input.length; i += size) {
      output.push(input.slice(i, i + size));
    }
    return output;
  };
};
