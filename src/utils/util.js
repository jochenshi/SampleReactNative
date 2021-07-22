export const isEmpty = val => val === ''  || val === undefined || val === null;

export const newTrim = (val) => {
  if (isEmpty(val)) {
    return '';
  }
  return String(val).trim();
}