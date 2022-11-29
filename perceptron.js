function train_perceptron(input, cls, weights, lr) {
  // loop over all inputs
  let prediction = input.reduce((prv, cur, index) => {
    return cur * weights[index + 1] + prv;
  }, 0);
  prediction += weights[0];
  if (prediction * cls > 0) {
    return weights;
  }
  let cur_lr = prediction > cls ? -lr : lr;
  console.log(prediction, cur_lr);
  for (let i = 0; i < input.length; i++) {
    weights[i + 1] += cur_lr * input[i];
  }
  weights[0] += cur_lr;
  return weights;
}

let lr = 1;
let input = [2, 11];
let cls = -1;
let weights = [-0.5, -1, -3];

console.log("res: " + train_perceptron(input, cls, weights, lr));
