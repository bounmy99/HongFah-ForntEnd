import axios from 'axios'
export const GetAllOrders = async(token)=>{
    try{
       return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/order/getall`,{
        headers :{
            'Authorization' : `Bearer ${token}`
        }
       })
    }catch(err){
        console.log(err)
    }
}
export const GetOneOrders = async(token,id)=>{
    try{
       return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/order/getone/${id}`,{
        headers :{
            'Authorization' : `Bearer ${token}`
        }
       })
    }catch(err){
        console.log(err)
    }
}