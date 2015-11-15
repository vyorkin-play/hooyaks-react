export default (a, b) => {
  if (a === b) {
    return true;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  const hasOwn = Object.prototype.hasOwnProperty.bind(b);
  for (let i = 0; i < aKeys.length; i++) {
    const prop = aKeys[i];
    if (!hasOwn(prop) || a[prop] !== b[prop]) {
      return false;
    }
  }

  return true;
};
