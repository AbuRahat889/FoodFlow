import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Contex/AuthProvaider";
import "../../../../src/App.css";
import { BsPeopleFill } from "react-icons/bs";
import { FcExpired } from "react-icons/fc";

const Details = () => {
  const { user } = useContext(AuthContex);
  const loader = useLoaderData();
  console.log(user);
  return (
    <div className="bg-[#d2d5d6]">
      <div className="align mt-10 py-10">
        <h1 className="text-6xl font-bold">{loader.Food_Name} </h1>

        <div className="mt-72 flex justify-around">
          <div className="bg-white w-1/2 h-1/2 border rounded-3xl ">
            <div className=" -mt-64 p-10">
              <img className="rounded-3xl " src={loader.Food_Image} alt="" />
            </div>

            <div className=" px-10 pb-5 space-y-2">
                <h1 className="card-title text-left">Shared meals will provide emergency food assistance to families in Palestine.</h1>
                <p className="text-left">With conflict escalating in October 2023, Palestine is facing an urgent humanitarian crisis. 1.8 million people are now food insecure, many of whom have lost their homes and are seeking safety in shelters. </p>
              <div className="flex items-center gap-40">
                <div className="flex gap-2 items-center mt-5">
                  <BsPeopleFill className="text-2xl" />
                  <span className="text-xl">
                    {loader.Food_Quantity} supporters
                  </span>
                </div>
                <div className="flex gap-2 items-center mt-5">
                  <FcExpired className="text-2xl" />
                  <span className="text-xl">{loader.Expired_Date} expired</span>
                </div>
              </div>
              <div className="text-left ">
                <Link className="mt-5 text-left btn bg-[#febb00] hover:text-[#febb00] hover:bg-black">Request</Link>
              </div>
            </div>
          </div>

          {/* donro information  */}
          <div>
            <div className="card  bg-base-100 shadow-xl -mt-52">
              <div className="card-body text-left">
                <h2 className="card-title  text-3xl font-bold">
                  Donor Information
                </h2>
                <div className="avatar justify-center">
                  <div className="w-24 rounded-xl">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </div>

                <div className="text-xl font-semibold space-y-3 mt-3">
                  <h1>Name : {user?.displayName} </h1>
                  <h1>Email : {user?.email} </h1>
                  <h1>Pickup Location : {loader.Pickup_Location} </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
