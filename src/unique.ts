import { identity } from './identity';

type MapEntryFunction<T, U> = (entry: T, index: number) => U;

/**
 * Creates a subset of the provided array with its unique values. The unique
 * value may be derived by a mapping function.
 *
 * ## Example
 *
 * ### With Primitives
 * ```javascript
 * import { unique } from '_ly';
 *
 * const nums = [5, 4, 3, 4, 9, 9];
 * unique()(nums); // [5, 4, 3, 9]
 * ```
 *
 * ### Mapping Function
 * ```javascript
 * import { pluck, unique } from '_ly';
 *
 * const people = [
 *   { id: 1, name: 'Foo' },
 *   { id: 2, name: 'Foo' },
 *   { id: 3, name: 'Bar' },
 *   { id: 4, name: 'Foo' },
 * ];
 *
 * const uniqueNames = unique(pluck('name'));
 * uniqueNames(people);
 * // [
 * //   { id: 1, name: 'Foo' },
 * //   { id: 3, name: 'Bar' },
 * // ]
 * ```
 *
 * @param {function(entry: T, index: number): U} [mapper=function(entry: T): T]
 * @returns {function(input: T[]): T[]}
 */
export const unique = <T, U>(mapper: MapEntryFunction<T, U> = identity as any) => (
  input: T[],
): T[] => {
  const values = new Set<U>();
  return input.reduce(
    (output, entry, index) => {
      const value = mapper(entry, index);
      if (!values.has(value)) {
        values.add(value);
        output.push(entry);
      }
      return output;
    },
    [] as T[],
  );
};
