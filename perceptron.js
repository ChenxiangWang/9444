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
  [-1, -1],
  [2, 1],
  [-2, 2],
];
let classes = [-1, -1, 1];
let weights = [0.5, 1, -2];

console.log(train_perceptron(inputs, classes, weights, lr));
