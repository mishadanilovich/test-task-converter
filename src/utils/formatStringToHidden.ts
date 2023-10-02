export const formatStringToHidden = (value: string): string =>
  value.slice(0, 2) + '*'.repeat(value.length - 1) + value.charAt(value.length - 1);
