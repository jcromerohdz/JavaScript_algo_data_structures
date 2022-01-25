/*
Sliding Window pattern
Write a function called maxSubarraySum which accepts
an array of integers and number called n. The function
should calculate the maximun sun of n consecutive elements
in the array
 */
function maxSubarraySum(arr, n){
  if( n > arr.length){
    return null
  }
  let maxSum = 0
  let tempSum =0
  for (let i =0; i < n; i++){
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = n; i< arr.length; i++){
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum

}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null