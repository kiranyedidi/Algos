/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var charCount = {};
  var longest = 0;
  var current = 0;
  var lastFound = -1;
  for (var i = 0; i < s.length; i++) {
      if (!charCount[s[i]]) {
          charCount[s[i]] = 1;
          current++;
      } else {
          if (longest < current) {
              longest = current;
          }
          charCount = {};
          i = s.indexOf(s[i], lastFound + 1);
          lastFound = i;
          current = 0;
      }
  }
  if (longest < current) {
    return current;
  }
  return longest;
};

console.log(lengthOfLongestSubstring("dvabcded"));


// Approach2

function lengthOfLongestSubstring(s) {
  const map = {};
  var left = 0;

  return s.split('').reduce((max, v, i) => {
      left = map[v] >= left ? map[v] + 1 : left;
      map[v] = i;
      return Math.max(max, i - left + 1);
  }, 0);
};


console.log(lengthOfLongestSubstring('dvabcddd'));