export const analyzeArray = (arr) => {
  const length = arr.length;

  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const average = sum / length;

  arr = arr.sort();
  const min = arr[0];
  const max = arr[length - 1];

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
};
