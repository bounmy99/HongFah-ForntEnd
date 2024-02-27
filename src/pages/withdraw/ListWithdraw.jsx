import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import iconImg from '../../assets/image/withdraw-icon.png'
import DataTables from '../../components/DataTable';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import previewIMG from "../../assets/image/upload.png";
import Swal from "sweetalert2"
import { read, writeFileXLSX, utils } from "xlsx";

const ListWithdraw = () => {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const [isActiveDropdownFilter, setIsActiveDropdownFilter] = useState(false);
    const [selected, setSelected] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [formType, setFormType] = useState(false);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const DataFilter = [15000, 30000, 50000, 100000];

    const handleClickOpenDrop = () => {
        setIsActiveDropdownFilter(isActiveDropdownFilter => !isActiveDropdownFilter);
    }
    let openDrop = isActiveDropdownFilter ? 'active' : ''

    const handleClick = (e) => {
        setSelected(e.target.textContent);
        setIsActiveDropdownFilter(false);
    }

    const handleModal = () => {
        setOpenModal(true)
    }
    const handleModalConfirm = () => {
        setImage("")
        setOpenModal(false);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "ຢືນຢັນສຳເລັດ",
            showConfirmButton: false,
            timer: 2500
        });
    }

    const handleModalCancel = () => {
        setOpenModal(false);
        setFormType(true);
        setImage("")
    }
    let openModals = openModal ? 'open' : '';

    const CreatWithdraw = ()=>{
        navigate('/withdraw/createwithdraw')
    }
    const OrderList = [
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Silver',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            user: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Silver',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Bronze',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Bronze',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Bronze',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Bronze',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        },
        {
            codeMember: 'ທ່ານ ວົງທອງ ແກ້ວສຳພັນ',
            position: 'Gold',
            acountName: 'Thadsaphone  SHALLIO MR',
            acountNumber: '018723601377864091',
            withdrawMoney: 500000,
            date: "10/11/2023",
        }
    ];
    
    const customStyles = {
        rows: {
            style: {
                minHeight: '60px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                fontSize: "15px",
                justifyContent: "center",
                fontWeight: "bold",
                color: "#00A5E8",
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "bold",
            },
        },
    };
    
    const columns = [
        {
            name: "ສະຖານະ",
            cell: row => (
                <div className="withdraw-status">
                    <div className="status-success" onClick={handleModal}>
                        <p>ເບີກຈ່າຍ</p>
                    </div>
                    <div className="status-danger">
                        <p>ປະຕິເສດ</p>
                    </div>
                </div>
            ),
            sortable: true,
            width: '150px'
        },
        {
            name: "ລະຫັດສະມາຊິກ",
            selector: (row) => row.codeMember,
            cell: row => (
                <p>{row.codeMember}</p>
            ),
            sortable: true,
            width: '150px'
        },
        {
            name: "ຕຳແໜ່ງ",
            selector: (row) => row.position,
            cell: row => (
                <div className="position">
                    {row.position === "Gold" && <p className="posit-gold">{row.position}</p>}
                    {row.position === "Silver" && <p className="posit-silver">{row.position}</p>}
                    {row.position === "Bronze" && <p className="posit-bronze">{row.position}</p>}
                </div>
            ),
            sortable: true,
            width: '80px'
        },
        {
            name: "ຊື່ບັນຊີ",
            selector: (row) => (row.acountName),
            cell: row => (
                <p className="posit-text-acount-name">{row.acountName}</p>
            ),
            sortable: true,
            width: '210px'
        },
        {
            name: "ເລກບັນຊີທະນາຄານ",
            sortable: true,
            selector: (row) => row.acountNumber,
            cell: row => (
                <p className="posit-text-acount-number">{row.acountNumber}</p>
            ),
            width: '180px'
        },
        {
            name: "ເງິນທີ່ຖອນ",
            sortable: true,
            selector: (row) => row.withdrawMoney,
            cell: row => (
                <p className="posit-text-withdraw">{row.withdrawMoney}.00</p>
            ),
            width: '100px'
        },
        {
            name: "ວັນທີຮ້ອງຂໍ",
            sortable: true,
            selector: (row) => row.date,
            cell: row => (
                <p>{row.date}</p>
            ),
            width: '180px'
        }
    ];
    const handleExport = () => {
        const heading = [["money","date", "member", "score"]];
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, heading);
        utils.sheet_add_json(ws, OrderList, { origin: "A2", skipHeader: true })
        utils.book_append_sheet(wb, ws, "ການເຄື່ອນໄຫວ");
        writeFileXLSX(wb, 'History.xlsx');
    }
    return (
        <div className="card-main">
            <div className="withdraw-content-header">
                <div className="withdraw-text">
                    <h3>ລາຍການຮ້ອງຂໍທັງໝົດ</h3>
                </div>
                <div className="withdraw-button" onClick={CreatWithdraw}>
                    <img src={iconImg} alt="" />
                    <h3>ຖອນເງິນ</h3>
                </div>
            </div>

            <div className="withdraw-table">
                <div class="withdraw-card-header">
                    <div class="search">
                        <div class="input-search">
                            <input type="text" placeholder="ຄົ້າຫາລູກຄ້າ ຕາມຊື່, ເບີໂທ ຫຼື ລະຫັດພະນັກງານ" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><circle cx="7.27273" cy="7.27273" r="6.27273" stroke="#00A5E8" stroke-width="2"></circle><line x1="14.5858" y1="16" x2="11.6364" y2="13.0506" stroke="#00A5E8" stroke-width="2" stroke-linecap="round"></line></svg>
                        </div>
                    </div>
                    <div class="button">
                        <div className="datepicker">
                            <i className='bx bx-calendar icons-left'></i>
                            <span className="text-date">ວັນທີ</span>
                            <DatePicker className="btn-datepicker" selected={startDate} onChange={(date) => {
                                setStartDate(date)
                                setIsActiveDropdownFilter(false);
                            }} />
                            <i className='bx bx-chevron-down icons-right'></i>
                        </div>
                        <div className="withdraw-filter">
                            <div className="withdraw-filter-menu">
                                <div className={`withdraw-filter-btn ${openDrop}`} onClick={handleClickOpenDrop}>
                                    <i className='bx bx-filter'></i> {selected ? <span className="sBtn-text">{selected}</span> : <span className="sBtn-text">ຕົວກອງ</span>}
                                    <i className='bx bx-chevron-down'></i>
                                </div>
                                {isActiveDropdownFilter &&
                                    <ul className="options-withdraw-filter">
                                        {DataFilter.map((item, idx) => (
                                            <li className="option-withdraw-filter" key={idx} onClick={handleClick}>
                                                <span className="option-withdraw-filter-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>
                        <div>
                            <button className="btn-show" type="button" onClick={handleExport}><i class='bx bxs-file-export bx-rotate-90' ></i> ນຳອອກຂໍ້ມູນ</button>
                        </div>
                    </div>
                </div>
                <DataTables columns={columns} OrderList={OrderList} customStyles={customStyles} />
            </div>


            {/* ================================Modal============================= */}
            <div className={`modal-withdraw ${openModals}`}>
                <div className="modal-withdraw-card Card">
                    <div className="modal-withdraw-card-content">
                        <div className="modal-input-withdraw">

                            <div className="modal-withdraw-input">
                                <div className="withdraw-title">
                                    <h3>ຂໍ້ມູນລູກຄ້າ</h3>
                                </div>
                                <div className="modal-withdraw-form-group">
                                    <div className="input-group-withdraw">
                                    <label htmlFor="">ລະຫັດສະມາຊິກ</label>
                                        <input type="text" value={"2201 THADSAPHONE"} className="form-modal-control-withdraw" />
                                    </div>
                                    <div className="input-group-withdraw">
                                    <label htmlFor="">ເບີໂທລະສັບ</label>
                                        <input type="text" value={"+856 55771132"} className="form-modal-control-withdraw" />
                                    </div>
                                    <div className="input-group-withdraw">
                                    <label htmlFor="">ຊື່ບັນຊີ</label>
                                        <input type="text" value={"THADSAPHONE SHALLIO MR"} className="form-modal-control-withdraw" />
                                    </div>
                                    <div className="input-group-withdraw">
                                    <label htmlFor="">ເລກບັນຊີ</label>
                                        <input type="text" value={"018723601377864091"} className="form-modal-control-withdraw" />
                                    </div>
                                    <div className="input-group-withdraw">
                                    <label htmlFor="">ເງິນທີ່ຖອນ</label>
                                        <input type="text" value={"4,000,000"} className="form-modal-control-withdraw" />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-withdraw-image">
                                <div className="withdraw-title">
                                    <h3>ອັບໂຫຼດໃບບິນ</h3>
                                </div>
                                <div className="withdraw-image">
                                    {image ? <img src={image} alt={fileName} className="uploadImage-withdraw" /> : <img src={previewIMG} className=".uploadImage-withdraw-preview" />}
                                        <input type="file" name="" id="" className="input-file" hidden
                                            onChange={({ target: { files } }) => {
                                                files[0] && setFileName(files[0].name)
                                                if (files) {
                                                    setImage(URL.createObjectURL(files[0]))
                                                }
                                            }}
                                        />
                                    <button type="button" onClick={() => document.querySelector(".input-file").click()} className="btn-withdraw-browse">Browse File</button>
                                </div>
                            </div>
                        </div>
                        <div className="modals-withdraw-btn">
                            <button type="button" className="modal-withdraw-btn btn-secondary" onClick={handleModalCancel}>ຍົກເລີກ</button>
                            <button type="button" className="modal-withdraw-btn btn-info" onClick={handleModalConfirm}>ຢືນຢັນ</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ListWithdraw
