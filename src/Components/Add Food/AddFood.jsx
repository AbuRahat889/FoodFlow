import React, { useContext, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContex } from '../Contex/AuthProvaider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddFood = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContex);

    const handlaAddFood  = async event =>{
        event.preventDefault();
        const donar_email = user?.email;
        const donar_name = user?.displayName;
        const doner_photo = user?.photoURL;

        const form = event.target;
        const food_name = form.name.value;
        // const photo = 
        const image = form.photo.value;
        const dedline = startDate;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const location = form.location.value;
        const description = form.description.value;
        const status = 'pending';


        const newFood ={
            food_name,
            image,
            dedline,
            quantity,
            category,
            location,
            description,
            status,
            donar :{
                donar_email:donar_email,
                donar_name:donar_name,
                photo:doner_photo
            }
        }
        console.table(newFood);
        try{
            const {data} = await axios.post(`${import.meta.env.VITE_SITE_Link}/food`, newFood)
            // alert('food added successsfully!!!!')
            Swal.fire({
                title: "Good job!",
                text: "You added a food successfully!!!!",
                icon: "success"
              });
              
        }
        catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }

    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
          <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
            <h2 className='text-lg font-semibold text-gray-700 capitalize '>
              Add a food
            </h2>
    
            <form onSubmit={handlaAddFood}>
              <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                <div>
                  <label className='text-gray-700 ' htmlFor='job_title'>
                    Food Name
                  </label>
                  <input
                    id='food_name'
                    name='name'
                    type='name'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                  />
                </div>
    
                <div>
                  <label className='text-gray-700 ' htmlFor='emailAddress'>
                    Food Imge
                  </label>
                  <input
                    id='image'
                    type='text'
                    name='photo'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                  />
                </div>
                <div className='flex flex-col gap-2 '>
                  <label className='text-gray-700'>Expired Date</label>
    
                  {/* Date Picker Input Field */}
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
    
                <div className='flex flex-col gap-2 '>
                  <label className='text-gray-700 ' htmlFor='category'>
                  Food Status
                  </label>
                  <select
                    name='category'
                    id='category'
                    className='border p-2 rounded-md'
                  >
                    <option value='Available'>Available</option>
                    <option value='Not Available'>Not Available</option>
                  </select>
                </div>
                <div>
                  <label className='text-gray-700 ' htmlFor='min_price'>
                    Food Quantity
                  </label>
                  <input
                    id='quantity'
                    name='quantity'
                    type='number'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                  />
                </div>
    
                <div>
                  <label className='text-gray-700 ' htmlFor='max_price'>
                  Pickup Location
                  </label>
                  <input
                    id='location'
                    name='location'
                    type='text'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2 mt-4'>
                <label className='text-gray-700 ' htmlFor='description'>
                Additional Notes
                </label>
                <textarea
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                  name='description'
                  id='description'
                ></textarea>
              </div>
              <div className='flex justify-end mt-6'>
                <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Add Food
                </button>
              </div>
            </form>
          </section>
        </div>
      );
};

export default AddFood;