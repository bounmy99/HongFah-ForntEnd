import React, { useState } from 'react'
import TableComponent from '../../components/TableComponent';
import product from '../../assets/image/lotions.png'
const OrderList = [
  {
    images: 'ຮູບພາບ',
    name: 'Handmade Pouch',
    amount: 1900,
    price: '84 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "ມາຮັບທີສາຂາ"
  },
  {
    images: 'ຮູບພາບ',
    name: 'SmartWatch',
    amount: 2900,
    price: '80 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "ມາຮັບທີສາຂາ"
  },
  {
    images: 'ຮູບພາບ',
    name: 'EarPhone',
    amount: 3900,
    price: '50 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "ມາຮັບທີສາຂາ"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Computer',
    amount: 5900,
    price: '74 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "ມາຮັບທີສາຂາ"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  },
  {
    images: 'ຮູບພາບ',
    name: 'Mobile',
    amount: 7900,
    price: '184 ລ້ານກີບ',
    reciver: "ທ່ານ ທອງຈັນ ມະນີວົງ",
    date: "01 jun 2023",
    address: "ນະຄອນຫຼວງ",
    status : "sending"
  }
];

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      fontSize: "15px",
      justifyContent: "center",
      fontWeight: "bold",
      backgroundColor : "#00A5E8",
      color: "white",
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
      justifyContent: "center",
    },
  },
};


const columns = [
  {
    name: "ຮູບພາບ",
    selector: (row) => (row.image),
    cell: row => (
      <div className="name-product">
        <img src={product} alt={row.image} width={50} height={50} />
      </div>
    ),
    sortable: true,
    width: '100px'
  },
  {
    name: "ໍຊື່ສິນຄ້າ",
    selector: (row) => (row.name),
    sortable: true,
    width: '130px'
  },
  {
    name: "ຈຳນວນ",
    selector: (row) => row.amount,
    sortable: true,
    width: '100px'
  },
  {
    name: "ລາຄາ",
    sortable: true,
    selector: (row) => row.price,
    width: '118px'
  },
  {
    name: "ຜູ້ຮັບ",
    sortable: true,
    selector: (row) => row.reciver,
    cell: row => (
      <div className="name-product">
        <div className="flex-name">
          <p>{row.reciver}</p>
          <span>Daimonds</span>
        </div>
      </div>
    ),
    width: '190px'
  },
  {
    name: "ວັນທີສັ່ງຊື້",
    sortable: true,
    selector: (row) => row.date,
    cell: row => (<p>{row.date}</p>),
    width: '118px'
  },
  {
    name: "ຈຸດໝາຍ",
    sortable: true,
    selector: (row) => row.address,
    cell: row => (
      <div className="name-product">
        <div className="flex-name">
          <p>{row.address}</p>
          <span>ເສດຖາ</span>
        </div>
      </div>
    ),
    width: '162px'
  },
  {
    name: "ສະຖານະ",
    sortable: true,
    selector: (row) => row.status,
    cell: row => (
      row.status === "sending"
      ? <p style={{color:"#00B488"}}>{row.status}</p>
      :  <p style={{color:"#FED400"}}>{row.status}</p>
    ),
    width: '162px'
  }
];
const ProcessingOrders = () => {

  return (
    <div>
      <TableComponent columns={columns} customStyles={customStyles} data={OrderList} />
    </div>
  )
}

export default ProcessingOrders