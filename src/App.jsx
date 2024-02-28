import { useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "./App.css"

//==================== Layout ======================
import Headers from "./layouts/Headers"
import SideBar from "./layouts/SideBar"

//==================== Pages  =====================
import LoginPages from "./pages/LoginPages"
import ForgetPassword from "./pages/ForgetPassword"
import HomePages from "./pages/HomePages"
import Dashboard from "./pages/Dashboard"

import ListProducts from "./pages/Products/ListProducts"
import EditProduct from "./pages/Products/EditProduct"
import AddProduct from "./pages/Products/AddProduct"

import HomeOrders from "./pages/orders/HomeOrders"
import InfoOrders from "./pages/orders/InfoOrders"
import InfoCancel from "./pages/orders/InfoCancel"
import InfoHistory from "./pages/orders/InfoHistory"
import ListEmployee from "./pages/lineWorks/ListEmployee"
import DetailsEmp from "./pages/lineWorks/DetailsEmp"
import ListPackage from "./pages/packages/ListPackage"
import Travels from "./pages/travels/Travels"
import AddTravels from "./pages/travels/AddTravels"
import DetailTravels from "./pages/travels/DetailTravels"
import Auth from "./pages/auth/Auth"
import EditUser from "./pages/auth/EditUser"
import AddUser from "./pages/auth/AddUser"
import HomeSales from "./pages/bonus/HomeSales"
import ListPosition from './pages/position/ListPosition';
import ListWithdraw from "./pages/withdraw/ListWithdraw"
import CreateWithDraw from "./pages/withdraw/CreateWithDraw"

function App() {
  const { users } = useSelector((state) => ({ ...state }))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let getData = JSON.parse(localStorage.getItem("data"))

  // console.log("Local", getData.token)
  // console.log("Redux", users)


useEffect(()=>{
  if (getData) {
    dispatch({
      type: "USER_LOGIN",
      payload: {
        token: getData.token,
        resfresToken: getData.refresToken,
        email: getData.email,
        phoneNumber: getData.phoneNumber,
        username: `${getData.firstName} ${getData.lastName}`,
        role: getData.role,
        userCode: getData.userCode
      }
    })
    // navigate("/dashboard")
  }
 
},[])

  return (
    <>
      {users && users.token && users.role === "admin" ?
        <>
          <SideBar />
          <section className="dashboard">
            <Headers />
            <div className="dash-content">
              <div className="container">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/listProducts" element={<ListProducts />} />
                  <Route path="/listProducts/editProduct/:id" element={<EditProduct />} />
                  <Route path="/listProducts/addProduct" element={<AddProduct />} />

                  <Route path="/homeOrders" element={<HomeOrders />} />
                  <Route path="/HomeOrders/infoOrders/:id" element={<InfoOrders />} />
                  <Route path="/HomeOrders/infoCancel/:id" element={<InfoCancel />} />
                  <Route path="/HomeOrders/infoHistory/:id" element={<InfoHistory />} />


                  <Route path="/listEmployee" element={<ListEmployee />} />
                  <Route path="/listEmployee/DetailsEmp/:id" element={<DetailsEmp />} />

                  <Route path="/ListPackage" element={<ListPackage />} />
                  
                  <Route path="/position" element={<ListPosition />} />

                  <Route path="/withdraw" element={<ListWithdraw />} />
                  <Route path="/withdraw/createwithdraw" element={<CreateWithDraw />} />

                  <Route path="/travels" element={<Travels />} />
                  <Route path="/travels/detailtravels/:id" element={<DetailTravels />} />
                  <Route path="/travels/addtravels" element={<AddTravels />} />

                  <Route path="/auth" element={<Auth />} />
                  <Route path="/auth/addUser" element={<AddUser />} />
                  <Route path="/auth/editUser/:id" element={<EditUser />} />

                  <Route path="/homeSales" element={<HomeSales />} />
                </Routes>
              </div>
            </div>
          </section>
        </>
        :
        <Routes>
          <Route path="/" element={<LoginPages />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      }
    </>
  )
}

export default App
