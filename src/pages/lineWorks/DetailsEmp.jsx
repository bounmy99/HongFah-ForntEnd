import react , {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetOneEmployee } from '../../functions/Employee';
const DetailsEmp = ()=>{
    const {id} = useParams();
    const { users } = useSelector((state) => ({ ...state }));
    const [detail, setDetail] = useState([]);
    useEffect(()=>{
        GetOneEmployee(users.token,id).then(res=>{
            setDetail(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    },[]);
    console.log("Details" , detail)
    return (
        <>
            <h1>Details Employees</h1>
            { JSON.stringify(detail)}
        </>
    )
}

export default DetailsEmp
