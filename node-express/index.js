const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})


function mulOccurence(str){
  let obj={};
  let n=str.length;
  for(let i=0;i<n;i++){
    if(obj[str[i]]===undefined){
      obj[str[i]]=1;
    }else{
      let num=obj[str[i]];
      obj[str[i]]=num+1
    }
  }
  for(let key in obj){
    console.log(key," : ",obj[key]);
  }
  let arr=[];
  for(let ele of str){
    if(obj[ele]!==undefined && obj[ele]>1){
      arr.push(ele);
      obj[ele]!==undefined
    }
  }
  return arr;
}