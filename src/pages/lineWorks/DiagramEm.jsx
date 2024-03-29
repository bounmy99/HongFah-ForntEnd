import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import imagePreview from '../../assets/avatar/image-avatar.jpeg'
import { GetAllEmployee,GetRootLineWork } from '../../functions/Employee';
const DiagramEm = () => {
  const { users } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [levelZero, setLavelZero] = useState([]);
  const [levelOne, setLavelOne] = useState([]);
  const [levelTwo, setLavelTwo] = useState([]);
  const [levelThree, setLavelThree] = useState([]);
  const [levelFour, setLavelFour] = useState([]);
  const [linework, setLinework] = useState([])

  useEffect(() => {
    GetAllEmployee(users.token).then(res => {
      // setLinework(res.data.data)
      setLavelZero(res.data.data.level_0);
      // setLavelOne(res.data.data.level_1);
      setLavelTwo(res.data.data.level_2);
      setLavelThree(res.data.data.level_3);
      setLavelFour(res.data.data.level_4);
    }).catch(err => {
      console.log(err);
      if(err.response.data.message === 'unauthorized'){
        dispatch({
          type: 'USER_LOGOUT',
          payload: null
        })
        navigate('/')
      }
    })

    loadingGetRoot();

  }, []);

  const loadingGetRoot = ()=>{
    GetRootLineWork(users.token).then(res=>{
      setLinework(res.data.data);
      setLavelOne(res.data.data.children);
    })
  }

  console.log("LineWork",linework.children);


  console.log("Level 0 is", levelZero);
  console.log("Level 1 is", levelOne);
  console.log("Level 2 is", levelTwo);
  console.log("Level 3 is", levelThree);
  console.log("Level 4 is", levelFour);

  // ===========pagination antd =============
  // const indexOfLastPages = pages + pageSize;
  // const indexOfFirstPages = indexOfLastPages - pageSize;
  // const currentPages = value.slice(indexOfFirstPages, indexOfLastPages)
  // ================ end pagination antd ===  ========

  // console.log("currentPages", currentPages);
  // console.log("count", count);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(show => !show)
  }

  return (
    <div className="plan-card-emp genealogy-scroll">
      {
        <div className="icons-show-hide">
          {show ? <EyeOutlined className="btn-show" onClick={handleShow} /> : <EyeInvisibleOutlined className="btn-show" onClick={handleShow} />}
        </div>
      }
    
      <div className="body genealogy-body genealogy-scroll">
        <TransformWrapper>
          <TransformComponent>
            <div className="genealogy-tree">
              <ul>
                  <li>
                    <Link to={`/listEmployee/DetailsEmp/${linework._id}`}>
                      <div className="member-view-box">
                        <div className="member-image">
                          <img src={imagePreview} alt="Member" />
                          <div className="member-details">
                            <h3>Level is {linework.level}</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <ul className="active">
                      <li >
                        <ul>
                          {levelOne && levelOne.map((level_1, index) => (
                            <>
                              <li key={index}>
                                <Link to={`/listEmployee/DetailsEmp/${level_1._id}`}>
                                  <div className="member-view-box">
                                    <div className="member-image">
                                      <img src={imagePreview} alt="Member" />
                                      <div className="member-details">
                                        <h3>Member {level_1.level}</h3>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <ul>
                                  {level_1 && level_1.children.map((level_2, index) => (
                                    <>
                                      <li key={index}>
                                        <Link to={`/listEmployee/DetailsEmp/${level_2._id}`}>
                                          <div className="member-view-box">
                                            <div className="member-image">
                                              <img src={imagePreview} alt="Member" />
                                              <div className="member-details">
                                                <h3>Member {level_2.level}</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </Link>
                                        <ul>
                                          {level_2 && level_2.children.map((level_3, index) => (
                                            <>
                                              <li key={index}>
                                                <Link to={`/listEmployee/DetailsEmp/${level_3._id}`}>
                                                  <div className="member-view-box">
                                                    <div className="member-image">
                                                      <img src={imagePreview} alt="Member" />
                                                      <div className="member-details">
                                                        <h3>Member {level_3.level}</h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </Link>
                                              </li>
                                            </>
                                          ))}
                                        </ul>
                                      </li>
                                    </>
                                  ))}
                                </ul>
                              </li>
                            </>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </li>
               
              </ul>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>


      {show &&
        <>
          <div className="plan-card-emp-sub-1">
            <h5>ລະຫັດສະມາຊິກ</h5>
            <div className="content-sub">
              <div className="sub-group">
                <span>ຊື່ທຸລະກິດ :</span>
                <span>KHONESAVANH SINGMA</span>
              </div>
              <div className="sub-group">
                <div>ຜູ້ອັບໄລ :</div>
                <div>
                  <p>56742</p>
                  <p>KHONESAVANH SINGMA</p>
                </div>
              </div>
              <div className="sub-group">
                <div>ຜູ້ແນະນຳ :</div>
                <div>
                  <p>56742</p>
                  <p>KHONESAVANH SINGMA</p>
                </div>
              </div>
              <div className="sub-group">
                <span>ຕຳແໜ່ງ :</span>
                <span>Business</span>
              </div>
              <div className="sub-group">
                <span>Point ສະສົມສ່ວນໂຕ :</span>
                <span>1132</span>
              </div>
              <div className="sub-group">
                <span>ຮັກສາຍອດເດຶອນປັດຈຸບັນ :</span>
                <span>0 PV</span>
              </div>
              <div className="sub-group">
                <span>ຮັກສາຍອດເດຶອນແລ້ວ :</span>
                <span>0 PV</span>
              </div>
            </div>
          </div>
          <div className="plan-card-emp-sub-2">
            <table className="table-card">
              <tr>
                <td></td>
                <td>ທີມງານຊ້າຍ</td>
                <td>ທີມງານຂວາ</td>
              </tr>
              <tr>
                <td>Point ຄົງເຫຼືອງ</td>
                <td>0,00</td>
                <td>0,00</td>
              </tr>
              <tr>
                <td>Point ລາຍວັນ</td>
                <td>0,00</td>
                <td>0,00</td>
              </tr>
              <tr>
                <td>Point ລວມ</td>
                <td>0,00</td>
                <td>0,00</td>
              </tr>
            </table>
            <div className="date-register">
              <div>ມື້ສະມັກສະມາຊິກ : </div>
              <div>11/05/2022</div>
            </div>
            <div className="date-register">
              <div>ມື້ໝົດອາຍຸ : </div>
              <div>11/05/2022</div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default DiagramEm