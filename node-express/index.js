const express = require('express');
const app = express();
const port = 3000;

// anagram
// const checkanagram = (req)=>{
//     let {string1,string2} = req.body
//     let string1Arr = string1.split()
//     let string2Arr = string2.split()
//     let newArr = []
//     for (let i=1;i<string1Arr.length;i++){
//         for (let j=1;i<string2Arr.length;j++){
//            if (string1Arr[i].includes(string2Arr[j]) ){
//             newArr.push(string1Arr[i])
//            }
//         }
//     }
//     if(newArr.length > 3) return {isAnagram:true}
//     else return {isAnagram:false}
// }

const checkanagram = (req) => {
    // let {string1,string2} = req.body
    let string1Arr = ["g", "o", "d"]
    let string2Arr = ["d", "o", "g"]
    // console.log(string1Arr)
    // let string2Arr = "dog".split()

    let newArr = []

    for (let i = 0; i < string2Arr.length; i++) {
        if (string1Arr.includes(string2Arr[j])) {
            newArr.push(string1Arr[i])
        }
    }


    // // console.log(newArr)
    if (newArr.length > 2) {
        console.log("true")
        return { isAnagram: true }
    }
    else {
        console.log("false")
        return { isAnagram: false }
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/get_data', async (req, res) => {
    try {
        const testData = [
            { name: 'Freddy', grade: 10, date: '20/07/2022' },
            { name: 'Jose', grade: 8, date: '20/07/2022' },
            { name: 'Freddy, grade: 8', date: '25/07/2022' },
            { name: 'Daniel', grade: 5, date: '21/07/2022' },
            { name: 'Jose', grade: 5, date: '22/07/22' }
        ]
        const { page = 1, limit = 10, serachKeyword } = req.body
        var query = {}
        if (serachKeyword) {
            query = {
                name: new RegExp(serachKeyword, i)
            }
        }
        const data = await db.collection("users").find(query).limit(limit).skip(page * limit)
        const total = db.collection('users').countDocument()

        res.JSON({
            status: "Success",
            data,
            total,

        })
    } catch (error) {
        res.send({ status: "Error", message: error })
    }
})

app.get('/anagram', (req, res) => {
    let data = checkanagram(req)
    return data;
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

