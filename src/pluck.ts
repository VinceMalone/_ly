import { Head, Tail } from './util/types';

export type Pluck<T extends any, K extends any[]> = Head<K> extends keyof T
  ? {
      0: T[Head<K>];
      1: Pluck<T[Head<K>], Tail<K>>;
    }[Tail<K> extends never ? 0 : 1]
  : undefined;

/**
 * Maps each source value to its specified nested property.
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source. If
 * a property can't be resolved, it will return `undefined` for that value.
 *
 * ## Examples
 *
 * Map every click event to the tagName of the targeted element and log it.
 * ```javascript
 * import { pipe, pluck } from '_ly';
 *
 * const eventToTagName = pluck('target', 'tagName');
 * const alertTagNameOnClick = pipe(eventToTagName, console.log);
 * document.addEventListener('click', alertTagNameOnClick);
 * ```
 *
 * Much convenient
 * ```javascript
 * employees.map(({ employeeUuid }) => employeeUuid)
 * // can be simplified to:
 * employees.map(pluck('employeeUuid'))
 * ```
 *
 * @param {...string} keys - The nested keys to pluck from each scoped value.
 * @returns {function(input: any): any}
 */
export const pluck = <Keys extends string[]>(...keys: Keys) => {
  if (keys.length === 0) {
    throw new Error('[_ly/pluck] At least one key must be provided.');
  }

  return <T extends any>(input: T): Pluck<T, Keys> =>
    keys.reduce((scope, key) => (scope == null ? undefined : scope[key]), input) as any;
};
