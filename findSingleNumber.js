function findSingleNumber(array) {
  var num = 0;
  for (var i = 0; i < array.length; i++) {
    num = num ^ array[i];
  }
  return num;
}

console.log(findSingleNumber([1,2,3,1,5,3,2]));