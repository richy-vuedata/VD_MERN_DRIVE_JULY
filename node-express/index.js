const express = require('express');
const app = express();
const port = 3002;


function stringCount(inp)
{
    let arr = [];
    for(let i = 0; i<inp.length; i++)
    {
        arr.push(inp[i])
    }
    
    let matchArr = [];

    for(let i = 0; i<arr.length; i++)
    {
        for(let j =0; j <arr.length; j++)
        {
            if(i == j) 
            {
                continue
            }
            if(arr[i] == arr[j])
            {
                matchArr.push(arr[i])
            }
        }
    }

    console.log(matchArr)
}
app.get('/',  (req, res) => {
    let word = "suresh";
    let data = stringCount(word)
    res.send("Work")
})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
})