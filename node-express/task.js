let obj1 = {
  name: "Akash",
  age: 25,
  active: true
};


let validateObject = (obj) =>{
    if(typeof(obj.name) === "string" && typeof(obj.age) === "number" && typeof(obj.active) === "boolean"){
        return true;
    }
    else{
        return false;
    }
}

console.log(validateObject(obj1))