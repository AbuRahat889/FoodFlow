import { CiSearch } from "react-icons/ci";
import "../../../../src/App.css";
import Service from "../HomePage/Sercivces/Service";
import { IoIosArrowDropdown } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchInfo = form.search.value;
    // console.log("click search btn", searchInfo);
  };
  return (
    <div className="bg-[#d2d5d6]">
      <Helmet>
        <title>FoodFlow | All Food</title>
      </Helmet>
      <div className="align">
        <div>
          <div>
            <h1 className="text-5xl font-bold pt-16">Choose where to donate</h1>
            <p className="text-xl mt-5 text-[#687781] font-semibold">
              The UN World Food Program delivers the meals
            </p>
          </div>

          <div className=" flex justify-center">
            <div className="flex justify-center items-center gap-2 mt-5 bg-[#febb00] w-2/5  rounded-xl py-2">
              <form onSubmit={handleSearch}>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    name="search"
                    className="grow"
                    placeholder="Search"
                  />
                  <input
                    className="px-2 text-xl"
                    type="submit"
                    value="search"
                  />
                </label>
              </form>

              <div>
                <select
                  name="category"
                  id="category"
                  className="border p-2 rounded-md"
                >
                  <option value="All">All</option>
                  <option value="Expired Date">Expired Date</option>
                  <option value="Quantity">Qualtity</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pb-20">
          <Service></Service>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
