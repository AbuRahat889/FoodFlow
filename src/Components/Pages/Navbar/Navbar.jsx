import { NavLink, Navigate } from "react-router-dom";
import '../../../../src/App.css';
import '../Navbar/Navbar.css'
import { useContext } from "react";
import { AuthContex } from "../../Contex/AuthProvaider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContex);
  //logot btn
  const handleLogout = ()=>{
    logOut();
  }
  
  const navlink = (
    <div className="text-xl space-x-12">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/availablefoods"}>Available Foods</NavLink>
      <NavLink to={"/addfood"}>Add Food</NavLink>
      <NavLink to={"/myfood"}>My Foods</NavLink>
      <NavLink to={"/"}>Food Request</NavLink>
    </div>
  );
  
  return (
    <div className=" bg-[#febb00]">
      <div className="navbar align">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <a className="poetsen btn btn-ghost text-3xl italic">FoodFlow</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          {
            user ? (<NavLink onClick={handleLogout}  className='text-xl mr-8 p-4 border-x-2'>Sign out</NavLink>) : (<NavLink to={"/signin"} className='text-xl mr-8 p-4 border-x-2'>Sign in</NavLink>)
          }
          <a className="btn bg-black border-none text-[#febb00]">Donate Now</a>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
