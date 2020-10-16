// use prime number for arrayLen  and * weird prime to
// decrease # of collisions to have more distributed data
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  // loop at most 100 times
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}