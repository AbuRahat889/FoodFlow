import { Outlet } from "react-router-dom"
import Home from "./Components/Pages/HomePage/Home"
import Navbar from "./Components/Pages/Navbar/Navbar"
import Footer from "./Components/Pages/Footer/Footer"



function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </>
  )
}

export default App
