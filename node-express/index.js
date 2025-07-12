const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// select * from product_table('product_id',"product_name","price") where(price > 10 and price < 50)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

function anagrams(str1,str2){
    if(str1 ){
        return 'true'
    }else{
        return 'false'
    }
}
anagrams('listen','silent');
anagrams('hello','world');