import axios from "axios";

export const GetAllBonus = async(token,isApproved)=>{
    return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/bonus/getbonuslist?isApproved=${isApproved}`,{
        headers :{
            'Authorization' : `Bearer ${token}`
        }
    })
}
export const GetAllMaintain = async(token,isMaintainSales)=>{
    return await axios.get(`${import.meta.env.VITE_HONGFHA_API}/bonus/getbonuslist?isMaintainSales=${isMaintainSales}`,{
        headers :{
            'Authorization' : `Bearer ${token}`
        }
    })
}
export const Maintainsales = async(token)=>{
    return await axios.post(`${import.meta.env.VITE_HONGFHA_API}/bonus/maintainsales`,{},{
        headers :{
            'Authorization' : `Bearer ${token}`
        }
    })
}
export const CalculateBonus = async(token)=>{
    return await axios.post(`${import.meta.env.VITE_HONGFHA_API}/bonus/calcalatebonus`,{},{
        headers :{
            'Authorization' : `Bearer ${token}`
        }
    })
}
export const Paybonus = async(token,bonusListID)=>{
    return await axios.post(`${import.meta.env.VITE_HONGFHA_API}/bonus/paybonus`,{bonusListID},{
        headers :{
            'Authorization' : `Bearer ${token}`
        }
    })
}

