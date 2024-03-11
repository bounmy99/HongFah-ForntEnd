import axios from 'axios'

export const GetAllWithDraw = async (token) => {
    return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/transaction/getall`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const GetWallet = async (token) => {
    return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/transaction/wallet`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const GetOneWithDraw = async (token,id) => {
    return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/transaction/getone/${id}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
export const ApprovedWithDraw = async (token,slip,id) => {
    return await axios.put(`${import.meta.env.VITE_HONGFHA_API}/transaction/approved/${id}`,slip,{
        headers: {
            'Content-Type' :'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    })
}
export const RejectWithDraw = async (token,id) => {
    return await axios.put(`${import.meta.env.VITE_HONGFHA_API}/transaction/reject/${id}`,{},{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
