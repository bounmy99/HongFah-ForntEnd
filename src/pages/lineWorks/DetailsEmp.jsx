import react, { useState, useEffect } from 'react';
import { useParams,Link ,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetOneEmployee } from '../../functions/Employee';
const DetailsEmp = () => {
    const { id } = useParams();
    const { users } = useSelector((state) => ({ ...state }));
    const [detail, setDetail] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetOneEmployee(users.token, id).then(res => {
            setDetail(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);
    console.log("Details", detail)

    return (
        <>
            <div>
                <button className="btn" style={{width:'100px'}} onClick={()=>navigate("/listEmployee", { state: { key: 2 } } )}>ຍ້ອນກັບ</button>
            </div>
            <h1>Details Employees</h1>
            <p>Level : {detail.level}</p>
            <p>LineUp : {detail.lineUp}</p>
            <p>PriceTotal : {detail.priceTotal}</p>
            <p>PV Total : {detail.pvTotal}</p>
            <hr />
            <p>
                USER CODE :  {detail.user_id && detail.user_id.userCode}
            </p>
            <p>
                FULL NAME :  {detail.user_id && `${detail.user_id.firstName}  ${detail.user_id.lastName}`}
            </p>
            <hr/>
            <h3>ລູກທີມ</h3>
            <table className="table" border={1}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Level</th>
                        <th scope="col">LineUp</th>
                        <th scope="col">PriceTotal</th>
                        <th scope="col">PV Total</th>
                    </tr>
                </thead>
                <tbody>
                    { detail.children && detail.children.map((child,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{child.level}</td>
                        <td>{child.lineUp}</td>
                        <td>{child.priceTotal}</td>
                        <td>{child.pvTotal}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default DetailsEmp
