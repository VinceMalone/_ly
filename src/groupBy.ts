import { identity } from './identity';

type MapEntryFunction<T, U> = (entry: T, index: number) => U;

/**
 * Groups items in an array; the result is a `Map`.
 *
 * ## Example
 * ```javascript
 * import { groupBy, pluck } from '_ly';
 *
 * const students = [
 *   { id: 1, grade: 'B' },
 *   { id: 2, grade: 'A' },
 *   { id: 3, grade: 'F' },
 *   { id: 4, grade: 'F' },
 *   { id: 5, grade: 'B' },
 * ];
 *
 * const studentsByGrade = groupBy(pluck('grade'), pluck('id'));
 * studentsByGrade(students);
 * // Map([['B', [1, 5]], ['A', [2]], ['F', [3, 4]]])
 * ```
 *
 * @param {function(entry: T, index: number): K} [keyMapper=function(entry: T): T]
 * @param {function(entry: T, index: number): V} [valueMapper=function(entry: T): T]
 * @returns {function(input: T[]): Map<K, V[]>}
 */
export const groupBy = <T, K, V>(
  keyMapper: MapEntryFunction<T, K> = identity as any,
  valueMapper: MapEntryFunction<T, V> = identity as any,
) => (input: T[]): Map<K, V[]> =>
  input.reduce((output, entry, index) => {
    const key = keyMapper(entry, index);
    const value = valueMapper(entry, index);
    const group = output.get(key) || [];
    return output.set(key, [...group, value]);
  }, new Map<K, V[]>());
