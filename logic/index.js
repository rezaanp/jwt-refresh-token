/**
 * Find how many of its contiguous subarrays of length m
 * contain a pair of integers with a sum equal to k
 *
 * @param {Array} a - The Array.
 * @param {number} m - The Length Of Sub Array.
 * @param {number} k - The Should Sum Result.
 * @returns {number} The Total Solution.
 */

const solution = (a, m, k) => {
  let result = 0;
  for (let x = 0; x < a.length; x++) {
    //GET SUB ARRAY
    let subArr = a.filter((_, id) => id >= x && id < x + m);

    //THE SUB ARRAY CONDITION MUST HAVE THE LENGTH EQUAL TO M
    if (subArr.length === m) {
      //COMPARE EACH VALUE SUB ARRAY
      for (let y = 0; y < subArr.length; y++) {
        for (let z = y + 1; z < subArr.length; z++) {
          //GET SUB ARRAY VALUE WHERE THE SUM IS K
          if (subArr[y] + subArr[z] === k) {
            result += 1; //COUNT SOLUTION IN SUB ARRAY
            y += m; //ENSURING THAT EACH SUB ARRAY HAS ONLY ONE SOLUTION
          }
        }
      }
    }
  }
  return result;
};

//PRINT OUT RESULT
// console.log(solution([15, 8, 8, 2, 6, 4, 1, 7], 2, 8));
