import axios from 'axios'
const Fecth = async()=>{
    try{
        // xios.get('https://reqres.in/api/users?page=2')
        const resultData = await axios.get('https://jsonplaceholder.typicode.com/users');
        return resultData.data
        

    }catch(err){
        console.log("table fetch catch error",err)

    }

}
export default Fecth;