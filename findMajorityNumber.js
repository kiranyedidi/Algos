// Approach 1

function findMajorityNumber(nums)
{
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}

console.log(findMajorityNumber([1,2,3,4,5,4,3,3,3,3]));


// Approach 2 - Boyer-Moore Voting Algorithm

function findMajorityNumber2(nums)
{
  var count = 0;
  var major = null;
  for (i = 0; i < nums.length; i++) {
    if (count === 0) {
      major = nums[i];
    }
    count += nums[i] === major ? 1 : -1;
  }
  return major;
}

console.log(findMajorityNumber2([1,2,3,4,5,4,3,3,3,3]));