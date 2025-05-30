import avg from './avg.js';

const avg = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  const sum = arr.reduce((acc, num) => {
    if (typeof num !== 'number') {
      throw new Error("All elements in the array must be numbers");
    }
    return acc + num;
  }, 0);

  return sum / arr.length;
}
export default avg;
// Example usage:

const numbers = [13, 7, 4];
console.log(avg(numbers));
