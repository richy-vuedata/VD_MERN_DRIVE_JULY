const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// })

function findDuplicates(str) {
  const charCount = {};
  const duplicates = [];
  const seen = new Set();

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] > 1 && !seen.has(char)) {
      //@ts-ignore
      duplicates.push(char);
      seen.add(char);
    }
  }

  return duplicates;
}


const finalValue = findDuplicates("subash");

console.log(finalValue);