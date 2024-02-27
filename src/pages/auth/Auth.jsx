import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// function 
import { GetAllUser } from '../../functions/Authentication';
import Loading from '../../components/Loadding';
import LoadingInfo from '../../components/LoadingInfo';
import Profile3 from '../../assets/image/profile-3.jpg'
const Auth = () => {
  const { users } = useSelector((state) => ({ ...state }))

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(6);
  const [count, setCount] = useState("")

  useEffect(() => {
    setLoading(true)
    GetAllUser(users.token).then(res => {
      setLoading(false);
      setUser(res.data.data)
      setCount(res.data.data.length)
    }).catch(err => {
      setLoading(false);
      console.log(err)
    })
  }, []);

  console.log(user)
  console.log("Count", count)
  console.log("Visible", visible)

  const handleShowMore = ()=>{
    setVisible((show)=>show + 6)
  }
  const handleShowLetle = ()=>{
    setVisible((show)=>show - 78)
  }

  return (
    <div className="card-main">
      <div className="auth-title">
        <div className="text-title">
          <h5>ຄົນທີ່ມີສິດໃນການເຂົ້າເຖິງເວັບແອັດມິນ ຫົງຟ້າ</h5>
        </div>
        <div className="btn-add">
          <Link to={"/auth/addUser"}>
            <button type="button" className="btn-success">ເພີ່ມໃໝ່</button>
          </Link>
        </div>
      </div>
      {loading ? 
      
      // <Loading paragraph={15}/> 
      <LoadingInfo count={15}/>
      
      :

        <div className="auth-list">
          <table cellPadding={0} cellSpacing={1}>
            {user && user.slice(0,visible).map((u, i) =>
              <tr>
                <td>
                  <img src={Profile3} alt="image" />
                  <div className="username">
                    <h3>Phonexay Sonethasine</h3>
                    <p>ສິດໃນການອະນຸຍາດ,ລົບສະມາຊິກ,ເພີ່ມເງື່ອນໄຂ,ຈັດການຄະແນນ</p>
                  </div>
                </td>
                <td>22011</td>
                <td>{u.role}</td>
                <td>
                  <Link to={`/auth/EditUser/${u._id}`}>
                    <button className="btn">
                      ລາຍລະອຽດ
                    </button>
                  </Link>
                </td>
              </tr>
            )}
          </table>
                {
                    visible >= count ?
                      <div className="load-more">
                        <button className="btn" onClick={handleShowLetle}>ສະແດງນ້ອຍລົງ</button>
                      </div>
                      :
                      <div className="load-more">
                        <button className="btn" onClick={handleShowMore}>ສະແດງເພີ່ມເຕີມ</button>
                      </div>
                  }
        </div>
      }

    </div>
  )
}

export default Auth
