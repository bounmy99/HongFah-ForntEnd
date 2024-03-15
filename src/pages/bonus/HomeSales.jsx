import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import HistoryTransfer from './HistoryTransfer';
import ListTotalSales from './ListTotalSales';
import ImageWarning from '../../assets/image/warning.png'
import { Maintainsales,CalculateBonus } from '../../functions/Bonus';
import Swal from 'sweetalert2';
const HomeSales = () => {
  const {users} = useSelector((state)=>({...state}))
  const [chagePage, setChagePage] = useState(false);
 
  useEffect(()=>{
    setChagePage(1);
  },[])

  const handleChangePage = (e) => {
    setChagePage(e)
  }

  const MaintainSales = ()=>{
    Maintainsales(users.token).then(res=>{
      console.log(res.data.data)
      Swal.fire({
        title: "ສຳເລັດ",
        text: "ຮັກສາຍອດສຳເລັດແລ້ວ",
        icon: "success",
        confirmButtonText: "ຕົກລົງ",
      });
    }).catch(err=>{
      console.log(err)
    })
  }

  const CalculateBonu = ()=>{
    CalculateBonus(users.token).then(res=>{
      console.log(res.data.data)
      Swal.fire({
        title: "ສຳເລັດ",
        text: "ຄຳນວນໂບນັດສຳເລັດແລ້ວ",
        icon: "success",
        confirmButtonText: "ຕົກລົງ",
      });
    }).catch(err=>{
      console.log(err)
    })
  }
 

  return (
    <div className="card-main">
          <div class="orders-button">
            <button type="button" class={`btn-order btn-success`} onClick={MaintainSales}>ກົດຮັກສາຍອດ</button>
            <button type="button"  class={`btn-order btn-orange`} onClick={CalculateBonu}>ຄິດໄລ່ໂບນັດ</button>
            <button type="button"  class={`btn-order  ${chagePage === 1 ? 'btn-warning' : 'btn-secondary'}`} onClick={()=>handleChangePage(1)}>ລາຍຊື່ທີ່ໄດ້ຮັບໂບນັດ</button>
            <button type="button"  class={`btn-order  ${chagePage === 2 ? 'btn-info' : 'btn-secondary'}`} onClick={()=>handleChangePage(2)}>ປະຫວັດ</button>
            {/* <button type="button" class={`btn-order  ${openModals ? 'btn-info' : 'btn-secondary'}`} onClick={handleClick}>ໂອນຍອດ</button> */}
          </div>

        { chagePage === 1 && <ListTotalSales/> }
        { chagePage === 2 && <HistoryTransfer /> }
       
      {/* <ModelComponet handleModal={handleModal} openModals={openModals} DataModal={DataModal} setOpenModal={setOpenModal} /> */}
    </div>
  )
}

export default HomeSales
