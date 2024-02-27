import axios from "axios";

// export const GetAllEmployee = async(token)=>{
//     return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/linework/getroot14816`,{
//         headers:{Authorization: `Bearer ${token}`}
//     })
// }

export const GetAllEmployee = async(token)=>{
    return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/linework/getwithlevel?level=0&toLevel=4`,{
        headers:{Authorization: `Bearer ${token}`}
    })
}

export const GetOneEmployee = async(token,id)=>{
    return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/linework/getone/${id}`,{
        headers : {Authorization : `Bearer ${token}`}
    })
}