// 2nd recursive function
function sumRange(num) {
   if (num === 1) return 1;
   return num + sumRange(num - 1);
}

sumRange(4)
// return 4 + sumRange(3)
// return 4 + 3 + sumRange(2)
// return 4 + 3 + 2 + sumRange(1)
// return 4 + 3 + 2 + 1 // walk thru callstack
// return 4 + 3 + 3
// return 4 + 6
// return 10



