function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}
const array = ['abc', 'def', 'ghi'];
const test = (element) => element.length === 3;

console.log(every(array, test)); // Output: true