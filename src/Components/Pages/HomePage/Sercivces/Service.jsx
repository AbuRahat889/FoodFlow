import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { FcExpired } from "react-icons/fc";

const Service = () => {
  const [loader, setLoader] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/services").then((res) => {
      console.log(res.data);
      setLoader(res.data);
    });
  }, []);

  return (
    <div>
      <div className="grid gap-8 grid-cols-3">
        {loader.map((load) => (
          <div>
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-110 hover:transition hover:duration-700 hover:ease-in-out">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                  {load.Food_Name}{" "}
                </h2>
                <div className="card-actions mt-5">
                  <Link to={`/details/${load._id}`} className="badge badge-outline text-blue-500">
                    View Detail
                  </Link>
                </div>
              </div>

              <figure>
                <img
                  className="rounded-tr-[80px] rounded-bl-[80px]"
                  src={load.Food_Image}
                  alt="Shoes"
                />
              </figure>

              <div className="card-body">
                <div className="flex gap-2 items-center ">
                  <BsPeopleFill className="text-2xl" />
                  <span className="text-xl">
                    {load.Food_Quantity} supporters
                  </span>
                </div>
                <div className="flex gap-2 items-center ">
                  <FcExpired className="text-2xl" />
                  <span className="text-xl">{load.Expired_Date} expired</span>
                </div>
                <progress
                  className="progress progress-info w-full"
                  value={load.Food_Quantity}
                  max="10"
                ></progress>
                <div className="flex justify-between items-center">
                  <p className="text-left"> Food Quantity</p>
                  <p className="text-right">{load.Food_Quantity} %</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
