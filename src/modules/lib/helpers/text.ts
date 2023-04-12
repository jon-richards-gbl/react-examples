export function trimText(original: string, maxLength: number): string {
  if (original.length > maxLength) {
    return `${original.slice(0, maxLength)}…`;
  }

  return original;
}
