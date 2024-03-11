import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import LoadRedirect from './LoadRedirect';
const RouteProtect = ({children}) => {
    const { users } = useSelector((state)=>({...state}));
    const [logined,setLogined] = useState(false)

    useEffect(()=>{
      if(users && users.token && users.role === "admin"){
        setLogined(true)
      }
    },[users]);

  return logined && users.token && users.role === "admin" 
  ? 
  children 
  : 
  <LoadRedirect />
}

export default RouteProtect
