import React from 'react'
import iconImg from '../../assets/image/withdraw-icon.png'

const CreateWithDraw = () => {
    return (
        <div className="card-main">
            <div className="CreateWithDraw-content">
                <div className="icons-print-withdraw">
                    <img src={iconImg} alt="" />
                </div>
                <div className="CreateWithDraw-form-group">
                    <div className="input-group-CreateWithDraw">
                        <label htmlFor="">ຄົ້ນຫາສະມາຊິກ</label>
                        <input type="text" value={"2201"} className="form-modal-control-CreateWithDraw" />
                        <i class='bx bx-search member'></i>
                    </div>

                    <div className="text-group-CreateWithDraw">
                        <div className="group-text">
                            <h3> THADSAPHONE</h3>
                            <p>+856 20 55771132</p>
                        </div>
                        <div className="group-text">
                            <p> ເງິນຄົງໃນ Wallet</p>
                            <h1>70.0000.000 ກີບ</h1>
                        </div>
                    </div>
                    <div className="input-group-CreateWithDraw">
                        <label htmlFor="">ບັນຊີທະນາຄານການຄ້າຕ່າງປະເທດລາວ</label>
                        <input type="text" value={"018723601377864091"} className="form-modal-control-CreateWithDraw" />
                        <i class='bx bxs-credit-card number-acount' ></i>
                    </div>

                    <div className="input-group-CreateWithDraw">
                        <label htmlFor="">ຊື່ບັນຊີ</label>
                        <input type="text" value={"THADSAPHONE SHALLIO MR"} className="form-modal-control-CreateWithDraw" />
                        <i class='bx bx-user name-acount' ></i>
                    </div>

                    <div className="input-group-CreateWithDraw">
                        <label htmlFor="">ເງິນທີ່ຖອນ</label>
                        <input type="text" value={"4,000,000"} className="form-modal-control-CreateWithDraw" />
                        <i class='bx bx-money withdraw'></i>
                    </div>
                    <div className="input-group-CreateWithDraw">
                        <label htmlFor="">ປ້ອນລະຫັດແອັດມິນ</label>
                        <input type="password"  className="form-modal-control-CreateWithDraw" />
                        <i class='bx bx-lock-alt password' ></i>
                    </div>
                    <div className="Createwithdraw-btn">
                        <button type="button" className="create-withdraw-btn btn-secondary" >ຍົກເລີກ</button>
                        <button type="button" className="create-withdraw-btn btn-info" >ຖອນເງິນ</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateWithDraw