function train_perceptron(inputs, classes, weights, lr) {
  let done = false;
  while (!done) {
    done = true;
    inputs.forEach((variables, index) => {
      let res = variables.reduce((prv, cur, index) => {
        return prv + cur * weights[index + 1];
      }, 0);
      res += weights[0];
      // update
      if (res > 0 && classes[index] < 0) {
        weights = weights.map((val, i_w) => {
          if (i_w === 0) {
            return val - lr;
          } else {
            return val - lr * variables[i_w - 1];
          }
        });
        done = false;
      } else if (res < 0 && classes[index] > 0) {
        done = false;
        weights = weights.map((val, i_w) => {
          if (i_w === 0) {
            return val + lr;
          } else {
            return val + lr * variables[i_w - 1];
          }
        });
      }
    });
  }
  return weights;
}

let lr = 1;
let inputs = [
  [0, 1],
  [2, 0],
  [1, 1],
];
let classes = [-1, -1, 1];
let weights = [-1.5, 0, 2];

console.log(train_perceptron(inputs, classes, weights, lr));
