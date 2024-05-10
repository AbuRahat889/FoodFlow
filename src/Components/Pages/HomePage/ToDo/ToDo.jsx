import "../../../../App.css";
import img1 from "../../../../assets/img/todo1.jpg";
import img2 from "../../../../assets/img/todo2.webp";
import img3 from "../../../../assets/img/todo3.webp";

const ToDo = () => {
  return (
    <div className="bg-[#fef4a6] -mt-10">
      <div className="align">
        <div>
          <h1 className="text-5xl pt-20 font-bold">What we do</h1>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10 pb-10">

          <div className=" hover:text-[#febb00] ">
            <figure>
              <img className="rounded-2xl" src={img3} alt="Shoes" />
            </figure>
            <h1 className="poetsen text-5xl my-5 bg-[#fef4a6]">Feed</h1>
          </div>

          <div className=" hover:text-[#febb00] ">
            <figure>
              <img className="rounded-2xl" src={img2} alt="Shoes" />
            </figure>
            <h1 className="poetsen text-5xl my-5 bg-[#fef4a6]">EDUCATE</h1>
          </div>

          <div className="  hover:text-[#febb00] ">
            <figure>
              <img className="rounded-2xl" src={img1} alt="Shoes" />
            </figure>
            <h1 className="poetsen text-5xl my-5 bg-[#fef4a6]">ADVOCATE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
