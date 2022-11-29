function getSoftmax(inputs, correct_index) {
  const sum = inputs.reduce((acc, x) => {
    return acc + Math.exp(x);
  }, 0);
  return inputs.map((x, index) => {
    if (index === correct_index) {
      return 1 - Math.exp(x) / sum;
    } else {
      return -Math.exp(x) / sum;
    }
  });
}

console.log(getSoftmax([1, 2, 3], 1));
