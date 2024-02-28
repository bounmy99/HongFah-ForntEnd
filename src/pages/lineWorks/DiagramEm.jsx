import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ZoomInOutlined, ZoomOutOutlined, RedoOutlined, EyeOutlined, EyeInvisibleOutlined, UserOutlined } from '@ant-design/icons';
import { Pagination, Drawer } from 'antd';
import dagram from '../../assets/image/Diagram.png';
import BGdagram from '../../assets/image/LineWork.png';
import imagePreview from '../../assets/avatar/Avatar.png'

import { GetAllEmployee, GetOneEmployee } from '../../functions/Employee';

const DiagramEm = () => {
  const { users } = useSelector((state) => ({ ...state }));
  const [value, setValue] = useState([]);
  const [levelZero, setLavelZero] = useState([]);
  const [levelOne, setLavelOne] = useState([]);
  const [levelTwo, setLavelTwo] = useState([]);
  const [levelThree, setLavelThree] = useState([]);
  const [levelFour, setLavelFour] = useState([]);
  const [count, setCount] = useState("");
  const [pageSize, setPageSize] = useState(29);
  const [pages, setPages] = useState(1);
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [actived, setActived] = useState("");
  const [lavel, setLavel] = useState("");

  useEffect(() => {
    GetAllEmployee(users.token).then(res => {
      setValue(res.data.data);
      setLavelZero(res.data.data.level_0);
      setLavelOne(res.data.data.level_1);
      setLavelTwo(res.data.data.level_2);
      setLavelThree(res.data.data.level_3);
      setLavelFour(res.data.data.level_4);
    }).catch(err => {
      console.log(err)
    })

  }, []);

  // console.log("Value", value);
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

  console.log("value", value);
  // console.log("currentPages", currentPages);
  // console.log("count", count);

  const showDrawer = (id, active) => {
    console.log("Id From btn ", id)
    setActived(active)
    GetOneEmployee(users.token, id).then(res => {
      setDetail(res.data.data)
    }).catch(err => {
      console.log(err)
    })
    setOpen(true);
  };

  const closeDrawer = () => {
    setActived("")
    setOpen(false);
  }

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(show => !show)
  }

  return (
    <div className="plan-card-emp">
      <Drawer title="ສະແດງລາຍລະອຽດ" onClose={() => {
        setOpen(false)
        setActived("")
      }} closable={false} open={open} >
        <div className="conten-drawer">
          {JSON.stringify(detail)}
          <div className="text">
            <p>title</p>
          </div>
          <div className="text">
            <p>title</p>
          </div>
          <div className="text">
            <p>title</p>
          </div>
          <div className="text">
            <p>title</p>
          </div>
          <div className="text">
            <p>title</p>
          </div>
          <div className="text">
            <p>title</p>
          </div>
          <div className="text">
            <p>title</p>
          </div>
          <div className="text">
            <p>title</p>
          </div>
          <div className="text">
            <p>title</p>
          </div>
          <div className="text">
            <p>title</p>
          </div>
        </div>
        <div className="btn-drawer">
          <button className="btn" onClick={closeDrawer} >ຍ້ອນກັບ</button>
        </div>
      </Drawer>
      {/* <img src={dagram} alt="test-data" className="img-diagram" /> */}
      <div className="plan-content">
        {
          <div className="icons-show-hide">
            {show ? <EyeOutlined className="btn-show" onClick={handleShow} /> : <EyeInvisibleOutlined className="btn-show" onClick={handleShow} />}
          </div>
        }
        <div className="body genealogy-body genealogy-scroll">
          <div className="genealogy-tree">
            <ul>
              <li>
                {levelZero && levelZero.slice(0, 1).map((level, index) => (
                  <Link to={`/listEmployee/DetailsEmp/${level._id}`} key={index}>
                    <div className="member-view-box">
                      <div className="member-image">
                        <img src={imagePreview} alt="Member" />
                        <div className="member-details">
                          <h3>{level ? `Level is ${level.level}` : `Name is ${level.lineUp}`}</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <ul className="active">
                  {levelOne && levelOne.map((level_1, index) => (
                    <>
                      <li key={index}>
                        <Link to={`/listEmployee/DetailsEmp/${level_1._id}`}>
                          <div className="member-view-box">
                            <div className="member-image">
                              <img src={imagePreview} alt="Member" />
                              <div className="member-details">
                                <h3>{level_1 ? `Level is ${level_1.level}` : `Name is ${level_1.lineUp}`}</h3>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <ul>
                          <li>
                            <a href="javascript:void(0);">
                              <div className="member-view-box">
                                <div className="member-image">
                                  <img src={imagePreview} alt="Member" />
                                  <div className="member-details">
                                    <h3>Member 1-1</h3>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <div className="member-view-box">
                                <div className="member-image">
                                  <img src={imagePreview} alt="Member" />
                                  <div className="member-details">
                                    <h3>Member 1-2</h3>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <div className="member-view-box">
                                <div className="member-image">
                                  <img src={imagePreview} alt="Member" />
                                  <div className="member-details">
                                    <h3>Member 1-3</h3>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <ul>
                              <li>
                                <a href="javascript:void(0);">
                                  <div className="member-view-box">
                                    <div className="member-image">
                                      <img src={imagePreview} alt="Member" />
                                      <div className="member-details">
                                        <h3>Member 1-3-1</h3>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <div className="member-view-box">
                                    <div className="member-image">
                                      <img src={imagePreview} alt="Member" />
                                      <div className="member-details">
                                        <h3>Member 1-3-2</h3>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <div className="member-view-box">
                                    <div className="member-image">
                                      <img src={imagePreview} alt="Member" />
                                      <div className="member-details">
                                        <h3>Member 1-3-3</h3>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <div className="member-view-box">
                                <div className="member-image">
                                  <img src={imagePreview} alt="Member" />
                                  <div className="member-details">
                                    <h3>Member 1-4</h3>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <div className="member-view-box">
                                <div className="member-image">
                                  <img src={imagePreview} alt="Member" />
                                  <div className="member-details">
                                    <h3>Member 1-5</h3>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <div className="member-view-box">
                                <div className="member-image">
                                  <img src={imagePreview} alt="Member" />
                                  <div className="member-details">
                                    <h3>Member 1-6</h3>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <div className="member-view-box">
                                <div className="member-image">
                                  <img src={imagePreview} alt="Member" />
                                  <div className="member-details">
                                    <h3>Member 1-7</h3>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <ul>
                              <li>
                                <a href="javascript:void(0);">
                                  <div className="member-view-box">
                                    <div className="member-image">
                                      <img src={imagePreview} alt="Member" />
                                      <div className="member-details">
                                        <h3>Member 1-7-1</h3>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <div className="member-view-box">
                                    <div className="member-image">
                                      <img src={imagePreview} alt="Member" />
                                      <div className="member-details">
                                        <h3>Member 1-7-2</h3>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                                <ul>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img src={imagePreview} alt="Member" />
                                          <div className="member-details">
                                            <h3>Member 1-7-2-1</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img src={imagePreview} alt="Member" />
                                          <div className="member-details">
                                            <h3>Member 1-7-2-2</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img src={imagePreview} alt="Member" />
                                          <div className="member-details">
                                            <h3>Member 1-7-2-3</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <div className="member-view-box">
                                    <div className="member-image">
                                      <img src={imagePreview} alt="Member" />
                                      <div className="member-details">
                                        <h3>Member 1-7-3</h3>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                      <a href="javascript:void(0);">
                        <div className="member-view-box">
                          <div className="member-image">
                            <img src={imagePreview} alt="Member" />
                            <div className="member-details">
                              <h3>Member 2</h3>
                            </div>
                          </div>
                        </div>
                      </a>
                      <ul className="active">
                        <li>
                          <a href="javascript:void(0);">
                            <div className="member-view-box">
                              <div className="member-image">
                                <img src={imagePreview} alt="Member" />
                                <div className="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                          <ul>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img src={imagePreview} alt="Member" />
                                    <div className="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img src={imagePreview} alt="Member" />
                                    <div className="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img src={imagePreview} alt="Member" />
                                    <div className="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div className="member-view-box">
                              <div className="member-image">
                                <img src={imagePreview} alt="Member" />
                                <div className="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                          <ul>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img src={imagePreview} alt="Member" />
                                    <div className="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img src={imagePreview} alt="Member" />
                                    <div className="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img src={imagePreview} alt="Member" />
                                    <div className="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div className="member-view-box">
                              <div className="member-image">
                                <img src={imagePreview} alt="Member" />
                                <div className="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                          <ul>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img src={imagePreview} alt="Member" />
                                    <div className="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img src={imagePreview} alt="Member" />
                                    <div className="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img src={imagePreview} alt="Member" />
                                    <div className="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>  */}
                    </>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="diagram-paginate">
                <Pagination current={pages} total={count} pageSize={pageSize} onChange={(value) => setPages(value)} />
            </div> */}
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