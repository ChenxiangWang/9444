/**Each hidden node should compute one disjunctive term in the expression.
 * The input-to-hidden weights are -1 for items that are negated, +1for the others.
 * The bias for each hidden node should be (k - ½)
 * where k is the number of items that are negated in the disjunctive term corresponding to that node.
 * The output node then computes the conjunction of all the hidden nodes, as in Question 2.
 * Set the bias weight to (½ - n), all other weights to 1.
 **/

function getAnd(numsOfNeg) {
  const res = numsOfNeg.map((v) => v - 1 / 2);
  return res;
}
console.log(getResultFromExpression([1, 1, 2]));
