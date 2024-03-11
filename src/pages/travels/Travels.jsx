import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2';
import { Empty } from 'antd';
import ImageTravel from '../../assets/image/no-image.png'
import LoadingCard from '../../components/LoadingCard';
import { GetAllTrip } from './../../functions/Trip';
const Travels = () => {
  const { users } = useSelector((state) => ({ ...state }))
  const [trip, setTrip] = useState([])
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    LoadData();
  }, [])

  const LoadData = () => {
    setLoading(true)
    GetAllTrip(users.token).then((res) => {
      setTrip(res.data.data)
      setLoading(false)
    })
  }

  console.log("Trips", trip)

  const styles = {
    margin: 5,
    height: 400,
    width: 250
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

  return (
    <div className="card-main">
      <div class="list-trip-filter">
        <div className="btn-add">
          <Link to={'/travels/addtravels'}>
            <button type="submit" className="btn-success">ເພີ່ມທິບທ່ອງທ່ຽວ</button>
            <i class='bx bxs-plus-circle'></i>
          </Link>
        </div>
        <div class="trip-filter-date">
          <div className="date-trip">
            <div className="datepicker-trip">
              <i className='bx bx-calendar icons-left-trip'></i>
              <span className="text-date-trip">ວັນທີ</span>
              <DatePicker className="btn-datepicker-trip" selected={startDate} onChange={(date) => {
                setStartDate(date)
                setIsActiveDropdownFilter(false);
              }} />
              <i className='bx bx-chevron-down icons-right-trip'></i>
            </div>
          </div>
          <div className="date-trip">
            <div className="datepicker-trip">
              <i className='bx bx-calendar icons-left-trip'></i>
              <span className="text-date-trip">ວັນທີ</span>
              <DatePicker className="btn-datepicker-trip" selected={startDate} onChange={(date) => {
                setStartDate(date)
                setIsActiveDropdownFilter(false);
              }} />
              <i className='bx bx-chevron-down icons-right-trip'></i>
            </div>
          </div>
        </div>
        <div class="search">
          <div class="input-search">
            <input type="text" placeholder="ຄົ້ນຫາລາຍການສິນຄ້າ" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <circle cx="7.27273" cy="7.27273" r="6.27273" stroke="#00A5E8" stroke-width="2"></circle>
              <line x1="14.5858" y1="16" x2="11.6364" y2="13.0506" stroke="#00A5E8" stroke-width="2" stroke-linecap="round"></line>
            </svg>
          </div>
          <div class="btn-search">
            <button type="button">ຄົ້ນຫາ</button>
          </div>
        </div>
      </div>
      <div class="trip-container">
        <div className="trip-title">
          <h5>ຈັດການທິບທ່ອງທຽ່ວ</h5>
        </div>
        {loading ?
          <div class="trip-cards">
            <div className="cards">
              <LoadingCard count={4} styles={styles} />
            </div>
          </div>
          :
          <div class="trip-cards">
            {trip && trip.map((item, idx) =>
              <div className="cards" key={idx}>
                { item.images && item.images[0] 
                 ?
                 <img src={item.images[0]} alt={item.name} />
                 : 
                 <img src={ImageTravel} alt={item.name} />
                 }
                <div className="cards-title">
                  <span className="text-right">{item.name}</span>
                </div>
                <div className="cards-body">
                  <h5>{`${item.placeName && item.placeName.substring(0, 60)}`}</h5>
                  <ul>
                    <li>{item.period}</li>
                    <li>{item.amount} ຄົນ</li>
                  </ul>
                  <h3>ວັນທີເດີນທາງ {new Date(item.departureDate).toLocaleDateString()}</h3>
                </div>
                <div className="cards-btn">
                  <div className="btn-del-ed">
                    <button type="button" className="btn-outline danger-outline" onClick={handleDelete}>
                      <i className='bx bxs-trash-alt' ></i> ລົບ
                    </button>
                    <Link to={`/travels/detailTravels/${item._id}`}>
                      <button type="button" className="btn-outline info-outline">
                        <i class='bx bxs-edit' ></i>  ແກ້ໄຂ
                      </button>
                    </Link>
                  </div>
                  <button type="button" className="btn-inline btn-orange">
                    <i class='bx bx-low-vision' ></i> ປິດບໍ່ໃຫ້ສະແດງ
                  </button>
                </div>
              </div>
            )}
          </div>
        }

      </div>
      {/* <ModelComponet handleModal={handleModal} openModals={openModals} DataModal={DataModal} setOpenModal={setOpenModal} /> */}
    </div>
  )
}

export default Travels
