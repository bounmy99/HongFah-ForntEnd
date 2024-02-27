import axios from "axios";

export const Login = async(value)=>{
    return await axios.post(`${import.meta.env.VITE_HONGFHA_API}/admin/login`,value)
}
export const GetAllUser = async(token)=>{
    return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/user/getall`,{
        headers :{
            'Authorization' : `Bearer ${token}`
        }
    })
}
export const GetOneUser = async(token,id)=>{
    return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/user/getone/${id}`,{
        headers :{
            'Authorization' : `Bearer ${token}`
        }
    })
}
