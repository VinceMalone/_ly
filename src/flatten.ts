/**
 * Flattens an array; just like the array prototype method (`flat`), but curried.
 *
 * ⚠️ Does not yet support a `depth` param.
 *
 * ## Example
 * ```javascript
 * flatten()([1, [2, 3], [[4]]]); // [1, 2, 3, [4]]
 * ```
 *
 * @returns {function(input: T[]): T[]}
 */
export const flatten = () => <T>(input: T[]) => Array.prototype.concat.apply([], input);
