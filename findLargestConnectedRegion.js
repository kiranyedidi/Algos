a = [[1, 1, 0, 0, 0],
     [0, 1, 0, 0, 0],
     [0, 0, 0, 0, 1],
     [1, 0, 0, 1, 1],
     [0, 1, 1, 1, 1]];

var maxRegionSize = 0;
var n = a.length;
var traversedPaths = [];

function resetTraversedPaths() {
  traversedPaths = [[false, false, false, false, false],
                      [false, false, false, false, false],
                      [false, false, false, false, false],
                      [false, false, false, false, false],
                      [false, false, false, false, false]];
}

function findMaxRegion(i, j, currentSize) {
  if (i < 0 || i >= n || j < 0 || j >= n || traversedPaths[i][j]) {
    return;
  }
  traversedPaths[i][j] = true;
  if (a[i][j] === 0) {
    return;
  }
  currentSize++;
  if (currentSize > maxRegionSize) {
    maxRegionSize = currentSize;
  }
  findMaxRegion(i, j+1, currentSize);
  findMaxRegion(i+1, j, currentSize);
  findMaxRegion(i+1, j+1, currentSize);
  findMaxRegion(i+1, j-1, currentSize);
  findMaxRegion(i-1, j, currentSize);
  findMaxRegion(i-1, j-1, currentSize);
  findMaxRegion(i-1, j+1, currentSize);
  findMaxRegion(i, j-1, currentSize);
  traversedPaths[i][j] = false;
}

function getMaxOnes() {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      resetTraversedPaths();
      findMaxRegion(i, j, 0);
    }
  }
}

getMaxOnes();
console.log(maxRegionSize);