function getFirstNonRepeated(s) {
  var counterArray = {};
  for (var i=0; i< s.length; i++) {
    if (s[i] !== ' ') {
      if (!counterArray[s[i]]) {
        counterArray[s[i]] = 1;
      } else {
        counterArray[s[i]]++;
      }
    }
  }
  for (var i=0; i< s.length; i++) {
    if (counterArray[s[i]] === 1) {
      return s[i];
    }
  }
}

console.log(getFirstNonRepeated('thi thsis kirank'));