function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}
getRandomPositiveInteger(1, 0);
checkStringLength('', 140);

console.log(getRandomPositiveInteger(1, 8));
console.log(checkStringLength('gfbrhhrthrthr', 8));

