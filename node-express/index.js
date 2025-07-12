const express = require('express');
const app = express();
const port = 5000;
const user = require('./users')

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.route('/api/user', user)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

// function mostOccurence(str){
//     const freq ={}
//     for(let char of str){
//         // console.log(char)
//         freq[char] = (freq[char] || 0) + 1
//     }
//     console.log(freq)    
// }
// mostOccurence('hello')