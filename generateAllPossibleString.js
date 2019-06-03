var A = [];
function generateStrings(n, k) {
  if (n < 1) {
    console.log(A);
    return;
  }
  for (var j = 0; j < k; j++) {
    A[n - 1] = j;
    generateStrings(n-1, k);
  }
};

generateStrings(3 , 2);