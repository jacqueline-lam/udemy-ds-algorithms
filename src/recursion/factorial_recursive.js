function factorial(num) {
    if (num === 1) return 1; // BASE CASE
    return num * factorial(num - 1);
}

factorial(4);
// return 4 * factorial(3)
// return 4 * 3 * factorial(2)
// return 4 * 3 * 2 * factorial(1)
// return (4 * (3 * (2 * 1))) // 24