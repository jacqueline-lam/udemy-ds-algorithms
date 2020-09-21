function naiveSearch(long, short) {
    var count = 0;
    // loop thru every char
    for (var i = 0; i < long.length; i++) {
        // loop thru short string, check immediately
        for (var j = 0; j < short.length; j++) {
            // break out of loop if this char doesn't match char at long str[i+j] index
            if (short[j] !== long[i + j]) break;
            // if j = length of short str, increment count
            if (j === short.length - 1) count++;
            // if match, stay in nested loop and increment j
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")