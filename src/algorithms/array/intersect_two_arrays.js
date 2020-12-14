// Given 2 arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

// Follow up:
// What if given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
let intersect = function (nums1, nums2) {
  const counter = {};
  for (let num of nums1) {
    counter[num] = (counter[num] || 0) + 1;
  };

  const result = [];
  for (let num of nums2) {
    if (counter[num] > 0) {
      result.push(num);
      counter[num]--;
    }
  };

  return result;
};

// var intersect = function(nums1, nums2) {
//   var baseArr, compareArr, newArr=[];
//   if(nums1.length <= nums2.length) {
//       baseArr = nums1;
//       compareArr = nums2;
//   } else {
//       baseArr = nums2;
//       compareArr = nums1;
//   }
//   for (let i = 0; i < baseArr.length; i++) {
//       let num = baseArr[i], idx=compareArr.indexOf(num);
//       if(idx != -1) {
//           compareArr.splice(idx, 1);
//           newArr.push(num);
//       }
//   }
//   return newArr;
// };

// var intersect = function(nums1, nums2) {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   let pointer = 0;

//   return nums1.filter((num) => {
//     while (num >= nums2[pointer]) {
//       pointer += 1;
//       if (num === nums2[pointer - 1]) return true;
//     }
//   });
// };

intersect([1, 2, 2, 1], [2, 2]); //[2,2]
//{1: 2, 2:2}; {2:2}
intersect([4, 9, 5], [9, 4, 9, 8, 4]) // [4,9]
//{4:1, 9:1,5:1}; {9:2,4:2,8:1}