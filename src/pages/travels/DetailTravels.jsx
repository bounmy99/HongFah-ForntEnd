import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import DataTable from 'react-data-table-component';
import { GetOneTrip, UpdateTrip } from '../../functions/Trip';
import ImageTravel from '../../assets/image/no-image.png'
import Profile3 from '../../assets/image/profile-3.jpg'


const DetailTravels = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => ({ ...state }));
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [value, setValue] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    GetOneTrip(users.token, id).then(res => {
      setValue(res.data.data)
    }).catch(err => {
      console.log(err.response.data.message)
    })
  }, []);

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
  const travel = [
    {
      profile: 'ຮູບພາບ',
      codeMember: '56697165',
      memberName: 'ນາງ ສຸດາລັດ ສຸລິຍາວົງ',
      position: "M"
    },
    {
      codeMember: '56697165',
      profile: 'ຮູບພາບ',
      memberName: 'ນາງ ສຸດາລັດ ສຸລິຍາວົງ',
      position: "L"
    },
    {
      codeMember: '56697165',
      profile: 'ຮູບພາບ',
      memberName: 'ນາງ ສຸດາລັດ ສຸລິຍາວົງ',
      position: "S"
    },
    {
      codeMember: '56697165',
      profile: 'ຮູບພາບ',
      memberName: 'ນາງ ສຸດາລັດ ສຸລິຍາວົງ',
      position: "L"
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '0px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        fontSize: "15px",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#00A5E8"
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        justifyContent: "center",
        fontSize: '14px'
      },
    },
  };

  const columns = [
    {
      name: "ໂປຣຟາຍ",
      selector: (row) => (row.profile),
      cell: row => (
        <div style={{ margin: 3 }}>
          <img src={Profile3} alt={row.image} width={50} height={50} />
        </div>
      ),
      sortable: true,
      width: '160px'
    },
    {
      name: "ຊື່ສະມາຊິກ",
      selector: (row) => (row.memberName),
      sortable: true,
      width: '130px'
    },
    {
      name: "ລະຫັດສະມາຊິກ",
      selector: (row) => row.codeMember,
      cell: row => (
        <div className="codeMember">
          <p className="name-posit">{row.codeMember}</p>
        </div>
      ),
      sortable: true,
      width: '150px'
    },
    {
      name: "ຕຳແໜ່ງ",
      selector: (row) => row.position,
      cell: row => (
        <p>{row.position}</p>
      ),
      sortable: true,
      width: '150px'
    },
    {
      name: "ຈັດການ",
      sortable: true,
      selector: (row) => row.address,
      cell: row => (
        <div className="detail-btn">
          <button type="button" onClick={handleDelete} className="btn-del"><i className="bx bxs-trash-alt"></i>  ລົບ</button>
          <button type="button" className="btn-call"><i class='bx bx-mobile-alt'></i>  ຕິດຕໍ່ຫາ</button>
        </div>
      ),
      width: '162px'
    }
  ];

  const handleChange = (e) => {
    setValue({...value, [e.target.name] : e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()];
    const isEmpty = values.includes('');
    if(isEmpty) {
      Swal.fire({
        position : "center",
        icon : "error",
        title : "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ",
        showCancelButton: false,
        timer : 3500
      });
      return;
    }
    const Data = Object.fromEntries(formData);
    e.currentTarget.reset();
    console.log("Data from Input", Data)

    UpdateTrip(Data,id,users.token).then(res=>{
      if(res.status === 200){
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
    }).catch(err=>{
      console.log(err.response.data);
      Swal.fire({
        position : "center",
        icon : "error",
        title : err.response.data.message,
        showCancelButton: false,
        timer : 3500
      });
      setImage("");
      setFileName("");
      return;
    })
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
          <div className="save-btn">
            <button type="submit" className="btn-info"> ບັນທຶກ </button>
          </div>
        </div>
        <div className="card-detail-content">
          <div className="detail-img">
            <div className="img">
              <div onClick={() => document.querySelector(".input-file").click()}>

                {image
                  ? <img src={image} alt={fileName} className="img-fluid" />
                  : <img src={value.images && value.images[0] ? value.images[0] : ImageTravel} alt="" />}

                <input type="file" name="" id="" className="input-file" hidden
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
                <input type="text" name="placeName"  className="form-controls-md" value={value.placeName}  onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label htmlFor="">ມື້ເດີນທາງ</label>
                <input type="date" name="departureDate"  className="form-controls-md" value={value.departureDate}  onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label htmlFor="">ໄລຍະເວລາ</label>
                <input type="text" name="period"  className="form-controls-md" value={value.period}  onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label htmlFor="">level</label>
                <input type="text" name="level"  className="form-controls-md" value={value.level}  onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label htmlFor="">ຈຳນວນຜູ້ເດີນທາງ</label>
                <input type="text" name="amount"  className="form-controls-md" value={value.amount}  onChange={handleChange}/>
              </div>
            </div>
          </div>
          <div className="detail-table">
            <div className="card-table card">
              <DataTable
                columns={columns}
                data={travel}
                pagination
                fixedHeader
                customStyles={customStyles}
              />
            </div>
            <div className="datail-conditional">
              <h3>ເງຶ່ອນໄຂຜຸ້ເຂົ້າຮ່ວມ</h3>
              <textarea name="condition" value={value.condition}  cols="30" rows="10" onChange={handleChange}>
              </textarea>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default DetailTravels