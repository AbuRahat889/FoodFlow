import "../../../../App.css";
import img from "../../../../assets/img/palestine.jpg";

const ActionCard = () => {
  return (
    <div className="align p-16">
      <div className="card lg:card-side bg-base-100 shadow-xl h-96">
        <figure className="relative">
          <img className="w-full h-full" src={img} alt="Album" />
          <h1 className="bg-[#ef404c] text-3xl text-white rounded-tr-2xl absolute w-48 h-10 bottom-0 left-0">Urgent</h1>
        </figure>

        <div className="card-body text-left justify-center">
          <div>
            <h2 className="card-title text-3xl font-bold">Give emergency aid in Palestine</h2>
            <p className="my-5 text-xl ">
              Shared meals will provide emergency food <br /> assistance to families in
              Palestine.
            </p>
          </div>
          <div className="card-actions gap-5">
            <button className="btn btn-outline hover:bg-[#febb00] hover:border-none hover:text-black">read more</button>
            <button className="btn bg-[#febb00] hover:text-[#febb00] hover:bg-black">Donate now</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ActionCard;
