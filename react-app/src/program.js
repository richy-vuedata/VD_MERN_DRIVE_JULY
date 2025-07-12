const str = "javascript program"
let count = 0
let valuesArray = []
let letterset = new Set()
for(let i of str) {
  if(!letterset.has(i)) {
    letterset.add(i)
  }else {
  valuesArray.push(i)
  }
}

console.log(valuesArray)

Output:
[ 'a', 'p', 'r', 'r', 'a' ]