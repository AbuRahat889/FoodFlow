import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const [startDate, setStartDate] = useState(new Date());
    const loader = useLoaderData();
    const navigate = useNavigate()
    console.log('update page loade ', loader);
    const  {
        food_name,
        image,
        dedline,
        quantity,
        category,
        location,
        description,
        status,   
      } = loader || {}

      //handle update food information 
      const updateInfo= async event=>{
        event.preventDefault();

        const form = event.target;
        const food_name = form.name.value;
        // const photo =
        const image = form.photo.value;
        const dedline = startDate;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const location = form.location.value;
        const description = form.description.value;
        const status = "pending";

        const newFood = {
            food_name,
            image,
            dedline,
            quantity,
            category,
            location,
            description,
            status,
          };

         console.table(newFood);

         try{
            const {data} = await axios.put(`${import.meta.env.VITE_SITE_Link}/update/${loader._id}`, newFood)
            Swal.fire({
                title: "Good job!",
                text: "You Update the food information!",
                icon: "success"
              });

              navigate('/myfood')

         }catch (error) {
            console.log(error);
         }
      }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Update Food
        </h2>

        <form onSubmit={updateInfo}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Food Name
              </label>
              <input
              defaultValue={food_name}
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
              defaultValue={dedline}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Food Status
              </label>
              <select
              defaultValue={category}
                name="category"
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="min_price">
                Food Quantity
              </label>
              <input
              defaultValue={quantity}
                id="quantity"
                name="quantity"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="max_price">
                Pickup Location
              </label>
              <input
              defaultValue={location}
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
              name="description"
              defaultValue={description}
              id="description"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Update Food
            </button>
          </div>
        </form>
      </section>
    </div>
    );
};

export default Update;