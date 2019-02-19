# TODO

- [ ] **`join`**

  ```ts
  fromPrototype(Array.prototype.join)
  ```

- [ ] **`sortBy`**

  ```ts
  <T>(mapper: (entry: T) => U, compare?: (a: U, b: U) => number) => (input: T[]) => T[]
  ```

- [ ] **`split`**

  ```ts
  fromPrototype(String.prototype.split)
  ```

- [ ] **`trim`**

  ```ts
  fromPrototype(String.prototype.trim)
  ```

- [ ] **`capitalize`**

  ```ts
  () => (value: string) => string
  ```

- [ ] **`wrap`**

  ```ts
  (before: string, after?: string) => (value: string) => string
  ```

## Fix

- [ ] Remove `as any` in pluck composition of `groupBy` test
- [ ] Remove `as () => number` in pluck composition of `max` test
- [ ] Remove `as () => number` in pluck composition of `min` test
