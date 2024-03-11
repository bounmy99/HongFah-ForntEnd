import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// function 
import { GetAllUser, Permission,DeleteUser } from '../../functions/Authentication';
import LoadingInfo from '../../components/LoadingInfo';
import Swal from 'sweetalert2';
import { Button, Tooltip, ConfigProvider } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
const Auth = () => {
  const { users } = useSelector((state) => ({ ...state }))

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(6);
  const [count, setCount] = useState("");
  const [roleList, setRoleList] = useState([])

  useEffect(() => {
    setLoading(true)
    loadData();
  }, []);

  const loadData = () => {
    GetAllUser(users.token).then(res => {
      setLoading(false);
      setUser(res.data.data)
      setCount(res.data.data.length)
      const roles = [...new Set(res.data.data.map(item => item.role))]
      setRoleList(roles)
    }).catch(err => {
      setLoading(false);
      console.log(err)
    })
  }

  const handleShowMore = () => {
    setVisible((show) => show + 3)
  }
  const handleShowLetle = () => {
    setVisible((show) => show - 6)
  }

  const handleRoles = (e, id) => {
    e.preventDefault();
    const value = {
      id: id,
      role: e.target.value
    }
    Permission(users.token, value.role, value.id).then(res => {
      if (res.data.message) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "ອັບເດດສຳເລັດ",
          showCancelButton: false,
          // timer : 3500
        });
        loadData();
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const handleDelete = (id)=>{
    Swal.fire({
      title: "ຢືນຢັນການລົບ",
      text: "ທ່ານຕ້ອງການລລົບແທ້ບໍ່ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ຢືນຢັນ",
      cancelButtonText: "ຍົກເລິກ",
  }).then((result) => {
      if (result.isConfirmed) {
          DeleteUser(users.token, id).then(res => {
              if (res.status === 200) {
                  Swal.fire({
                      title: "ສຳເລັດ",
                      text: "ລົບສຳເລັດແລ້ວ.",
                      icon: "success",
                      confirmButtonText: "ຕົກລົງ",
                  });
                  loadData();
              }
          }).catch(err => {
              console.log(err)
          })

      }
  });
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
        <LoadingInfo count={15} />

        :

        <div className="auth-list">
          <table cellPadding={0} cellSpacing={1}>
            {user && user.slice(0, visible).map((u, i) =>
              <tr>
                <td>
                  <Link to={`/auth/EditUser/${u._id}`}>
                  <Tooltip placement="topLeft" color={'#00A5E8'} title={'ເບິ່ງລາຍລະອຽດ'}>
                    <img src={u.profile} alt="image" />
                    </Tooltip>
                  </Link>
                  <div className="username">
                    <h4>{`${u.firstName} ${u.lastName}`}</h4>
                    <p>ສິດໃນການອະນຸຍາດ,ລົບສະມາຊິກ,ເພີ່ມເງື່ອນໄຂ,ຈັດການຄະແນນ</p>
                  </div>
                </td>
                <td>{u.phoneNumber}</td>
                <td>{u.email}</td>
                <td>{u.userCode}</td>
                <td>
                  <select name="role"
                    defaultValue={u.role}
                    className="select-roles"
                    onChange={(e) => handleRoles(e, u._id)}
                  >
                    {roleList.map((role, index) => (
                      <option value={role} index={index}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <div className="btn-auth-action">
                    <Link to={`/auth/EditUser/${u._id}`}>
                    <Tooltip placement="top" color={'#00A5E8'} title={'ເບິ່ງລາຍລະອຽດ'}>
                      <button className="btn-user-detail">
                        <EyeOutlined />
                      </button>
                    </Tooltip>
                  </Link>

                  <Tooltip placement="top" color={'#00A5E8'}  title={'ລົບຂໍ້ມູນ'}>
                    <button className="btn-user-delete" onClick={()=>handleDelete(u._id)}>
                      <DeleteOutlined />
                    </button>
                  </Tooltip>
                  </div>
                </td>
              </tr>
            )}
          </table>
          {
            user.length > 0 ?
              visible >= count ?
                <div className="load-more">
                  <button className="btn" onClick={handleShowLetle}>ສະແດງນ້ອຍລົງ</button>
                </div>
                :
                <div className="load-more">
                  <button className="btn" onClick={handleShowMore}>ສະແດງເພີ່ມເຕີມ</button>
                </div>

              :
              <h1>ບໍ່ມີຂໍ້ມູນ</h1>
          }
        </div>
      }

    </div>
  )
}

export default Auth
