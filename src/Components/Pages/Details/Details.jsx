import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Contex/AuthProvaider";
import "../../../../src/App.css";
import { BsPeopleFill } from "react-icons/bs";
import { FcExpired } from "react-icons/fc";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Details = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContex);
  
  const loader = useLoaderData();
  const {
    food_name,
    image,
    dedline,
    quantity,
    category,
    location,
    description,
    status = "requested",
  } = loader || {};
  console.log("this i s  donar :", loader);

  return (
    <div className="bg-[#d2d5d6]">
      <div className="align mt-10 py-10">
        <h1 className="text-6xl font-bold">{food_name} </h1>

        <div className="mt-72 flex justify-around">
          <div className="bg-white w-1/2 h-1/2 border rounded-3xl ">
            <div className=" -mt-64 p-10">
              <img className="rounded-3xl " src={image} alt="" />
            </div>

            <div className=" px-10 pb-5 space-y-2">
              <h1 className="card-title text-left">
                Shared meals will provide emergency food assistance to families
                in Palestine.
              </h1>
              <p className="text-left">
                With conflict escalating in October 2023, Palestine is facing an
                urgent humanitarian crisis. 1.8 million people are now food
                insecure, many of whom have lost their homes and are seeking
                safety in shelters.{" "}
              </p>
              <div className="flex items-center gap-40">
                <div className="flex gap-2 items-center mt-5">
                  <BsPeopleFill className="text-2xl" />
                  <span className="text-xl">{quantity} supporters</span>
                </div>
                <div className="flex gap-2 items-center mt-5">
                  <FcExpired className="text-2xl" />
                  <span className="text-xl">
                    {new Date(dedline).toLocaleDateString()} expired
                  </span>
                </div>
              </div>
              <div className="text-left ">
                <a
                  href="#my_modal_8"
                  className="mt-5 text-left btn bg-[#febb00] hover:text-[#febb00] hover:bg-black"
                >
                  Request
                </a>
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
                    <img src={loader.donar.photo} alt="" />
                  </div>
                </div>

                <div className="text-xl font-semibold space-y-3 mt-3">
                  <h1>Name : {loader.donar.donar_name} </h1>
                  <h1>Email : {loader.donar.donar_email} </h1>
                  <h1>Pickup Location : {loader.location} </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ********************* */}

      {/* <a href="#my_modal_8" className="btn">
        open modal
      </a> */}
      {/* Put this part before </body> tag */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box">
          <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
            <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
              <h2 className="text-lg font-semibold text-gray-700 capitalize ">
                Request a food
              </h2>

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="rounded-3xl" src={image} alt="Shoes" />
                </figure>
              </div>

              <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 " htmlFor="job_title">
                      Food Name
                    </label>
                    <input
                      defaultValue={food_name}
                      readOnly
                      id="food_name"
                      name="name"
                      type="name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 " htmlFor="emailAddress">
                      Food Imge
                    </label>
                    <input
                      defaultValue={image}
                      readOnly
                      id="image"
                      type="text"
                      name="photo"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex flex-col gap-2 ">
                    <label className="text-gray-700">Expired Date</label>

                    {/* Date Picker Input Field */}
                    <DatePicker
                      readOnly
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 " htmlFor="max_price">
                      Pickup Location
                    </label>
                    <input
                      defaultValue={location}
                      readOnly
                      id="location"
                      name="location"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  {/* donar informatin  */}
                  <div>
                    <label className="text-gray-700 " htmlFor="max_price">
                      Donar Name
                    </label>
                    <input
                      defaultValue={loader.donar.donar_name}
                      readOnly
                      id="location"
                      name="location"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 " htmlFor="max_price">
                      Donar Email
                    </label>
                    <input
                      defaultValue={loader.donar.donar_email}
                      readOnly
                      id="location"
                      name="location"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  {/* user info  */}
                  <div>
                    <label className="text-gray-700 " htmlFor="max_price">
                      User Name
                    </label>
                    <input
                      defaultValue={user?.displayName}
                      readOnly
                      id="location"
                      name="location"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 " htmlFor="max_price">
                      User Email
                    </label>
                    <input
                      defaultValue={user?.email}
                      readOnly
                      id="location"
                      name="location"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <label className="text-gray-700 " htmlFor="description">
                    Additional Notes
                  </label>
                  <textarea
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    defaultValue={description}
                    name="description"
                    id="description"
                  ></textarea>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Request Food
                  </button>
                </div>
              </form>
            </section>
          </div>

          <div className="modal-action">
            <a href="#" className="btn">
              Close
            </a>
          </div>
        </div>
      </div>

      {/* ************************* */}
    </div>
  );
};

export default Details;
