export type Head<T> = T extends [any, ...any[]]
  ? ((...args: T) => any) extends (head: infer U, ...args: any[]) => any
    ? U
    : never
  : never;

export type Tail<T> = T extends [any, any, ...any[]]
  ? ((...args: T) => any) extends (head: any, ...args: infer U) => any
    ? U
    : never
  : never;
