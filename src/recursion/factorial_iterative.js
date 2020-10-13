function factorial(num) {
    let total = 1;
    // no reason to set condition to be i > 0 because no need to *1
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}

factorial(3) // 3 * 2 = 6
factorial(4) // 4 * 3 * 2 = 24