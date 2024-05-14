import img from "../../../../assets/img/counter.jpg";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="">
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-65"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="bebas">
            <h1 className="mb-5 text-5xl mt-0 text-white  text-balance">
              FOOD RESCUE US LIFETIME NUMBERS
            </h1>

            <div className="flex justify-center my-5 text-[#febb00]">
              <hr className="w-96 " />
            </div>

            <div className="flex gap-10 justify-around">
              <div className="">
                <CountUp
                  className="text-5xl text-[#febb00] "
                  start={50}
                  end={100}
                  duration={2.75}
                  suffix="M"
                ></CountUp>
                <h1 className="text-2xl  text-white mt-2">
                  MEALS PROVIDED TO <br /> THOSE IN NEED
                </h1>
              </div>

              <div className="">
                <CountUp
                  className="text-5xl text-[#febb00]"
                  start={100}
                  end={183}
                  duration={2.75}
                  suffix="M"
                ></CountUp>
                <h1 className="text-2xl  text-white mt-2">
                  LBS OF FOOD KEPT <br /> FROM LANDFILL
                </h1>
              </div>

              <div className="">
                <CountUp
                  className="text-5xl text-[#febb00] "
                  start={500}
                  end={5006}
                  duration={2.75}
                  decimals={2}
                  decimal=","
                ></CountUp>
                <h1 className="text-2xl  text-white mt-2">
                  TONS OF CO2eq <br /> AVOIDED
                </h1>
              </div>

              <div className="">
                <CountUp
                  className="text-5xl text-[#febb00]"
                  start={100}
                  end={200}
                  duration={2.75}
                  decimals={2}
                  decimal=","
                  suffix="+"
                ></CountUp>
                <h1 className="text-2xl  text-white mt-2">
                  VOLUNTEER FOOD <br /> RESCUERS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
