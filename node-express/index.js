
function firstRepeated(s)
{
  let seen = new Set()
  for( let char of s)
  {
    if(seen.has(char))
    {
      return char
    }
    seen.add(char)
  }
  return null
}

let s = "hello"
console.log(firstRepeated(s))