/**
 * A function that returns the (first) parameter given to it.
 *
 * ℹ️ If you're questioning the value a utility like this, it's a common
 *    functional programming helper and has similar value to the `noop`
 *    function. For more information, visit your favorite web search engine
 *    provider and use the keywords "computer science identity function"!
 *
 * ## Example
 * ```javascript
 * const key = Symbol('key');
 * identity(key); // Symbol('key')
 * ```
 *
 * @param {T} value
 * @returns {T}
 */
export const identity = <T>(value: T): T => value;
