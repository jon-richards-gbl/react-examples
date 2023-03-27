export function isNotUndefined<T>(item?: T | null): item is T {
  return Boolean(item);
}
