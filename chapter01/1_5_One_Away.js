/**
 * Scan through both strings's at the same time, when a difference is
 * encountered:
 *   * if this is the first edit:
 *     * if strings are the same length then consider it a replacement
 *     * if strings are different lengths then consider it a delete from the longer string
 *   * if this is the second edit then return false
 *
 * N = max(|str1|, |str2|)
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string}  str1 The first string
 * @param  {string}  str2 The second string
 * @return {boolean}      True if strings are 0 or 1 edit apart, otherwise false
 */

const oneAway = (s1, s2) => {
  const s1Len = s1.length;
  const s2Len = s2.length;
  //If s1, s2 are 2 characters difference in Length => Return False
  if (Math.abs(s1Len - s2Len) > 2) return false;

  let index1 = 0, index2 = 0, difference = 0;

  while (index1 < s1Len && index2 < s2Len && difference < 2) {
    if (s1[index1] !== s2[index2]) {
      //[CASE 1] Difference appears
      difference++;
      //If difference = 2 => Return False
      if (difference > 1) return false;

      if (s1Len > s2Len) {
        //If string1 > string2, increase the pointer of str1
        index1++;
      } else if (s1Len < s2Len) {
        //If string1 < string2, increase the pointer of str2
        index2++;
      } else if (s1Len == s2Len) {
        //If string1 = string2, increase 2 pointers
        index1++;
        index2++;
      }
    } else {
      //[CASE 2] Difference NOT appears
      index1++;
      index2++;
    }
  }
  return true;
};

// // Test
console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);
console.log(oneAway("padasdle", "pad_sdle"), true);
console.log(oneAway("test131dsa", "test131ddda"), false);
