import React, { useState, useEffect } from 'react'
import ModelComponet from '../../components/ModelComponet';
import HistoryTransfer from './HistoryTransfer';
import ListTotalSales from './ListTotalSales';
import ImageWarning from '../../assets/image/warning.png'
import Swal from 'sweetalert2'
const HomeSales = () => {
  const [openModal, setOpenModal] = useState(false)
  const [chagePage, setChagePage] = useState(false)

  useEffect(()=>{
    setChagePage(1)
  },[])

  const DataModal = [
    {
      image: ImageWarning,
      label: "ຢືນຢັນການໂອນ",
      title: "ທ່ານຕ້ອງການໂອນຍອດໃຫ້ສະມາຊິກຈຳນວນ 80 ຄົນ",
      desc: "ເມື່ອໂອນແລ້ວ ບໍ່ສາມາດຍົກເລີກໄດ້ (ທ່ານສາມາດກວດສອບຫານໂອນໄດ້ທີ່ປະຫວັດການໂອນ)"
    }
  ]
  const handleModal = () => {
    setOpenModal(openModal => !openModal)
  }
  let openModals = openModal ? 'open' : ''

  const handleChangePage = (e) => {
    setChagePage(e)
  }

  const handleClick = ()=>{
    Swal.fire({
      title: "ຢືນຢັນການໂອນ",
      text: "ທ່ານຕ້ອງການຍອດໃຫ້ສະມາຊິກຈຳນວນ 80 ຄົນ",
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
          text: "ການໂອນຍອດສຳເລັດແລ້ວ.",
          icon: "success",
          confirmButtonText: "ຕົກລົງ",
        });
        navigate("/homeSales")
      }
    });
  }

  return (
    <div className="card-main">
          <div class="orders-button">
            <button type="button" class={`btn-order  ${chagePage === 1 ? 'btn-warning' : 'btn-secondary'}`} onClick={()=>handleChangePage(1)}>ເງື່ອນໄຂການຮັກສາຍອດ</button>
            <button type="button" class={`btn-order  ${chagePage === 2 ? 'btn-info' : 'btn-secondary'}`} onClick={()=>handleChangePage(2)}>ປະຫວັດໂອນ</button>
            <button type="button" class={`btn-order  ${openModals ? 'btn-info' : 'btn-secondary'}`} onClick={handleClick}>ໂອນຍອດ</button>
          </div>

        { chagePage === 1 && <ListTotalSales/> }
        { chagePage === 2 && <HistoryTransfer /> }
       
      {/* <ModelComponet handleModal={handleModal} openModals={openModals} DataModal={DataModal} setOpenModal={setOpenModal} /> */}
    </div>
  )
}

export default HomeSales
