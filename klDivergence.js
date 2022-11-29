import { log2 } from "./utils.js";

function getKLDivergence(inputs1, inputs2) {
  let res = 0;
  for (let i = 0; i < inputs1.length; i++) {
    const p = inputs1[i];
    const q = inputs2[i];
    res += p * (log2(p) - log2(q));
  }
  return res;
}

const P = [1 / 2, 1 / 4, 1 / 8, 1 / 8];
const Q = [1 / 4, 1 / 8, 1 / 8, 1 / 2];

console.log(getKLDivergence(P, Q));
