import axios from 'axios'

export const GetAllTrip = async (token) => await axios.get(`${import.meta.env.VITE_HONGFHA_API}/trip/getall`,{
    headers :{
        'Authorization' : `Bearer ${token}`
    }
})
export const GetOneTrip = async (token,id) => await axios.get(`${import.meta.env.VITE_HONGFHA_API}/trip/getone/${id}`,{
    headers :{
        'Authorization' : `Bearer ${token}`
    }
})
export const CreateTrip = async (Data,token) => await axios.post(`${import.meta.env.VITE_HONGFHA_API}/trip/create`,Data,{
    headers :{
        'Content-Type' : 'multipart/form-data',
        'Authorization' : `Bearer ${token}`
    }
})
export const UpdateTrip = async (Data,id,token) => await axios.put(`${import.meta.env.VITE_HONGFHA_API}/trip/update/${id}`,Data,{
    headers :{
        'Content-Type' : 'multipart/form-data',
        'Authorization' : `Bearer ${token}`
    }
})