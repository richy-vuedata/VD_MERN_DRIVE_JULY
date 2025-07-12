// Write a function to **check if two strings are anagrams** of each other.

// Two strings are anagrams if they contain the same characters in a different order.

// ### **Examples**

// - **Input:** "listen", "silent"
// - **Output:** true
// - **Input:** "hello", "world"
// - **Output:** false
export function areAnagrams(str1, str2) {
 
  const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();


  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  
  const charCount = {};

  for (const char of normalizedStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of normalizedStr2) {
    if (!charCount[char]) {
      return false; 
    }
    charCount[char]--;
  }

  return true; 
}

console.log(areAnagrams('listen', 'silent')); // true