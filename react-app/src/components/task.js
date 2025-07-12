// find the 2nd largest  number in a array 
const arr = [1,2,34,5,6]

const sorting = arr.sort((a,b)=>b-a)

console.log(sorting[1])

for(let i = 0 ; i < arr.length ; i++){
  for(let j = 0 ; j < arr.length ; j++){
    if(arr[ j] < arr[j+1]){
      let temp = arr[j]

      arr[j] = arr[j+1]
      arr[j+1] = temp
    }
  }
}

  console.log(arr[1])

// Write a function to **check if two strings are anagrams** of each other.

// Two strings are anagrams if they contain the same characters in a different order.

// ### **Examples**

// - **Input:** "listen", "silent"
// - **Output:** true
// - **Input:** "hello", "world"
// - **Output:** false

const anagrams =  (arr1, str2) =>{
  if(arr1.length !== str2.length){
    return false
  }
  for(let i = 0 ; i < arr1.length ;i++){
    if(str2.includes(arr1[i])){
  return true
}else{
  return false
}
  }
 
}
console.log(anagrams("hello","hello"))
