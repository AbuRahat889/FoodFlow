import { NavLink, Navigate } from "react-router-dom";
import '../../../../src/App.css';

const Navbar = () => {
  const navlink = (
    <div className="text-xl space-x-12">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>Available Foods</NavLink>
      <NavLink to={"/"}>Add Food</NavLink>
      <NavLink to={"/"}>Manage My Foods</NavLink>
    </div>
  );
  
  return (
    <div className="align">
      <div className="navbar bg-base-100 ">
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
          <a className="btn btn-ghost text-xl">FoodFlow</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          <NavLink to={"/"} className='text-xl mr-8 p-4 border-x-2'>Sign in</NavLink>
          <a className="btn bg-[#febb00]">Donate Now</a>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
