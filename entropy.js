import { log2 } from "./utils.js";
function getEntropy(inputs) {
  return inputs.reduce((sum, p) => sum + p * -log2(p), 0);
}
console.log(getEntropy([1 / 2, 1 / 4, 1 / 8, 1 / 8]));
