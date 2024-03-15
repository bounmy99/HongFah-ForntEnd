import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import DataTable from 'react-data-table-component';
import { Empty, Button, Drawer, Pagination } from 'antd';
import { GetWalletWithUserCode } from '../../functions/WithDraw';
import { GetOneTrip, UpdateTrip,AddmemberTrip } from '../../functions/Trip';
import ImageTravel from '../../assets/image/no-image.png'
import Profile3 from '../../assets/image/profile-3.jpg'

const DetailTravels = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => ({ ...state }));
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [value, setValue] = useState([]);
  const [valueSearch, setValueSearch] = useState([]);
  const [status, setStatus] = useState(false);
  const [useCode, setUserCode] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [member, setMember] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = ()=>{
    GetOneTrip(users.token, id).then(res => {
      setValue(res.data.data)
    }).catch(err => {
      console.log(err.response.data.message)
    })
  }

  console.log("GetOneTrip",value)

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleSeach = (e) => {
    setUserCode(e.target.value);
  }

  const handleSeachData = () => {
    setLoading(true);
    GetWalletWithUserCode(users.token, useCode).then(res => {
      setValueSearch(res.data.data)
      setStatus(true);
      setLoading(false);
    }).catch(err => {
      if (err.response.data.message === 'unauthorized') {
        dispatch({
          type: 'USER_LOGOUT',
          payload: null
        })
        navigate('/')
      }
    })
  }

  const handleDelete = () => {
    Swal.fire({
      title: "ທ່ານຕ້ອງການລົບແທ້ບໍ່",
      text: "ຖ້າທ່ານລົບໄປແລ້ວບໍ່ສາມາດກູ້ຄືນໄດ້ອີກ!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ຢືນຢັນ",
      cancelButtonText: "ຍົກເລິກ",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "ສຳເລັດ",
          text: "ການລົບຂໍ້ມູນສຳເລັດ.",
          icon: "success",
          confirmButtonText: "ຕົກລົງ",
        });
      }
    });
  }

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const handleChangeSearch = (e) => {
    setValueSearch({ ...valueSearch, [e.target.name]: e.target.value })
  }


  const handleMember = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Data = Object.fromEntries(formData);
    e.currentTarget.reset();
    console.log("Data from Input", Data);
    AddmemberTrip(users.token,Data).then(res=>{
      setMember(res.data.data)
      setOpen(false);
      loadData();
    }).catch(err=>{
      console.log(err)
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()];
    const isEmpty = values.includes('');
    if (isEmpty) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ",
        showCancelButton: false,
        timer: 3500
      });
      return;
    }
    const Data = Object.fromEntries(formData);
    e.currentTarget.reset();
    console.log("Data from Input update trip", Data)

    UpdateTrip(Data, id, users.token).then(res => {
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "ອັບເດດສິນຄ້າສຳເລັດ",
          showConfirmButton: false,
          timer: 2500
        });
        navigate("/travels");
        setImage("");
        setFileName("");
      }
    }).catch(err => {
      console.log(err.response.data);
      setImage("");
      setFileName("");
      return;
    })
  }

  const styleInput = {
    width: 280,
    padding: 6,
    margin: 5,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: "bold",
    outline: "none",
    paddingLeft: 35,
    borderColor: "1px solid #00A4CD"
  }
  return (
    <div className="card-main">
      <div className="card-detail">
        <div className="card-detail-header">
          <div className="text-tilte">
            <button
              onClick={() => navigate('/travels')}
              className="text-link">
              <i class='bx bx-chevron-left'></i>
              ກັບໄປໜ້າກ່ອນ
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-detail-title">
            <div className="title-text">
              <h3>ລາຍລະອຽດ ແລະ ຜູ້ໂຊກດີ</h3>
            </div>
          </div>
          <div className="card-detail-content">
            <div className="detail-img">
              <div className="img">
                <div onClick={() => document.querySelector(".input-file").click()}>

                  {image
                    ? <img src={image} alt={fileName} className="img-fluid" />
                    : <img src={value.images && value.images ? value.images : ImageTravel}  alt="" />}

                  <input type="file" name="images" className="input-file" hidden
                    onChange={({ target: { files } }) => {
                      files[0] && setFileName(files[0].name)
                      if (files) {
                        setImage(URL.createObjectURL(files[0]))
                      }
                    }} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="">ຊື່ສະຖານທີ່</label>
                  <input type="text" name="placeName" className="form-controls-md" value={value.placeName} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="">ມື້ເດີນທາງ</label>
                  <input type="text" name="departureDate" className="form-controls-md" value={new Date(value.departureDate).toLocaleDateString()} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="">ໄລຍະເວລາ</label>
                  <input type="text" name="period" className="form-controls-md" value={value.period} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="">level</label>
                  <input type="text" name="level" className="form-controls-md" value={value.level} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="">ຈຳນວນຜູ້ເດີນທາງ</label>
                  <input type="text" name="amount" className="form-controls-md" value={value.amount} onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="detail-table">
              <Button type="primary" onClick={showDrawer}>
                ເພີ່ມສະມາຊິກ
              </Button>
              <div className="form-add-member">
                <Drawer title="ເພີ່ມສະມາຊິກ" onClose={onClose} open={open}>
                  <div className="add-member-form-group">
                    <div className="input-group-add-member">
                      <div>
                        <label htmlFor="">ຄົ້ນຫາສະມາຊິກ</label>
                      </div>
                      <input type="text" value={useCode} style={styleInput} className="form-modal-control-add-member" onChange={handleSeach} />
                      <i class='bx bx-search member' style={{fontSize:20,cursor:"pointer"}} onClick={handleSeachData}></i>
                    </div>
                    {status ?
                      <form onSubmit={handleMember}>
                        <div className="input-group-add-member">
                          <input type="text" name="trip_id" value={value._id} hidden />
                          <input type="text" name="user_id" value={`${valueSearch.user_id && valueSearch.user_id._id}`} hidden />
                          <div>
                            <label htmlFor="">ຊື່</label>
                          </div>
                          <input type="text" name="" style={styleInput} value={`${valueSearch.user_id && valueSearch.user_id.firstName}`} className="form-modal-control-add-member" />
                        </div>
                        <div className="input-group-add-member">
                          <div>
                            <label htmlFor="">ນາມສະກຸນ</label>
                          </div>
                          <input type="text" name="" style={styleInput} value={`${valueSearch.user_id && valueSearch.user_id.lastName}`} className="form-modal-control-add-member" />
                        </div>
                        <div className="input-group-add-member">
                          <div>
                            <label htmlFor="">ເບີໂທ</label>
                          </div>
                          <input type="text" name="" style={styleInput} value={`${valueSearch.user_id && valueSearch.user_id.phoneNumber}`} className="form-modal-control-add-member" />
                        </div>
                        <div className="add-member-btn" style={{justifyContent: "center"}}>
                          <button type="button" onClick={()=>{
                            setOpen(false);
                            setStatus(false);
                            setValueSearch([])
                          }
                            } style={{ width: 50, padding: 3, marginTop: 5 , marginLeft: 100}} className="add-member-btn btn-secondary" >ຍົກເລີກ</button>
                          <button type="submit" style={{ width: 50, padding: 3, marginTop: 5 , marginLeft: 10}} className="add-member-btn btn-info" >ເພີ່ມ</button>
                        </div>
                      </form>
                      :
                      <div className="empty-card">
                        <Empty
                          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                          imageStyle={{
                            height: 60,
                          }}
                          description={
                            <span>
                              <a>ບໍ່ມີຂໍ້ມູນ</a>
                            </span>
                          }
                        >
                        </Empty>
                      </div>
                    }
                  </div>
                </Drawer>

              </div>
              <div className="card-table">
                <div className="table-show-member">
                  <table cellPadding={0} cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ໂປຣຟາຍ</th>
                        <th>ຊື່ສະມາຊິກ</th>
                        <th>ລະຫັດສະມາຊິກ</th>
                        <th>ຕຳແໜ່ງ</th>
                        <th>ແກ້ໄຂ</th>
                      </tr>
                    </thead>
                    <tbody>
                      { value.members && value.members.map((item,i)=>(
                        <tr>
                        <td>ຊື່ສະຖານທີ່</td>
                        <td>ມື້ເດ</td>
                        <td>dd</td>
                        <td>{item.p}</td>
                        <td>level</td>
                      </tr>
                      ))
                      }
                      
                    </tbody>
                  </table>
                  <div className="pagination-member">
                    <Pagination defaultCurrent={1} total={50} />
                  </div>
                </div>
              </div>
              <div className="datail-conditional">
                <h3>ເງຶ່ອນໄຂຜຸ້ເຂົ້າຮ່ວມ</h3>
                <textarea name="condition" value={value.condition} cols="30" rows="10" onChange={handleChange}>
                </textarea>
              </div>
            </div>
          </div>
          <div className="save-btn">
            <button onClick={() => navigate('/travels')} className="btn-danger"> ຍົກເລິກ </button>
            <button type="submit" className="btn-info"> ບັນທຶກ </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DetailTravels