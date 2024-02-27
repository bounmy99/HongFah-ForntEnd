import React ,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// fucntion
import { GetOneUser } from '../../functions/Authentication';
const EditUser = () => {
    const { id } = useParams();
    const {users } = useSelector((state)=>({...state}))
    const [userEdit, setUserEdit] = useState([]);

    useEffect(()=>{
        GetOneUser(users.token,id).then(res=>{
            setUserEdit(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    },[]);

  return (
    <div>
        <h3>EditUser</h3>
        {JSON.stringify(userEdit)}
    </div>
  )
}

export default EditUser