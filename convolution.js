/**
 * @param:
 * j,k: height and width of image.
 * l: channel.
 * m,n: height and width of kernel.
 * c: number of kernel.
 * s: strips.
 */

function convolution(j, k, l, m, n, c, s) {
  const weights = 1 + m * n * l;
  const height = 1 + (j - m) / s;
  const width = 1 + (k - n) / s;
  const neurons = width * height * c;
  const connection = width * height * weights * c;
  const parameters = weights * c;
  return {
    weights,
    width,
    height,
    neurons,
    connection,
    parameters,
  };
}

console.log(convolution(42, 54, 3, 6, 6, 16, 4));
