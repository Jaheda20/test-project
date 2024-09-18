import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProfileCard from "./ProfileCard";

export const Community = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  console.log(members);

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-10">
        Members: {members.length}
      </h1>

      <div className=" p-3 rounded-xl border w-full shadow-md bg-gray-300 mb-6">
        <div className="flex flex-row-reverse items-center justify-between gap-10">
          {/* sorting */}
          <div className="w-3/12 flex mt-4 gap-2 items-center justify-center">
            <label className="block mb-2 text-md font-medium text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              name="sort"
              className="block w-2/3 px-4 py-2 text-sm pr-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 "
            >
              <option value="Age">Age</option>
              <option value="City">Rank</option>
            </select>
          </div>

          {/* search */}
          <div className="w-9/12 space-y-1 dark:text-gray-800 mt-2 flex items-center gap-3">
            <label htmlFor="Search" className="">
              Search
            </label>
            <form className="flex items-center relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search by name"
                className="px-4 py-2 rounded-md w-full text-gray-800 bg-white"
              />
              <button
                type="submit"
                className="px-4 md:px-2 py-2 rounded-md text-xs md:text-base absolute right-6"
              >
                <FaSearch />
              </button>
            </form>
          </div>
        </div>

        {/* filter */}
        <div className="w-full mt-2 flex items-center justify-start gap-4 ">
          <h4 className="mt-4">Filter by results:</h4>
          <div className="w-64 flex mt-4 gap-2 items-center">
            {/* <label for="options" className="block mb-2 text-md font-medium text-gray-700">Gender:</label> */}
            <select
              id="gender"
              name="gender"
              className="block w-full px-4 py-2 text-sm pr-8 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 "
            >
              <option value="Male & Female">Male & Female</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="w-64 flex mt-4 gap-2 items-center">
            {/* <label for="options" className="block mb-2 text-md font-medium text-gray-700">Continents:</label> */}
            <select
              id="options"
              name="options"
              className="block w-full px-4 py-2 pr-8 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 "
            >
              <option value="">All Continents</option>
              <option value="asia">Asia</option>
              <option value="africa">Africa</option>
              <option value="north-america">North America</option>
              <option value="south-america">South America</option>
              <option value="europe">Europe</option>
              <option value="australia">Australia</option>
            </select>
          </div>

          <div className="flex items-center justify-center mt-4 gap-2">
            <button className="px-6 bg-fuchsia-500 text-white font-semibold rounded-lg py-2 ">
              Filter
            </button>
            <button className="px-6 bg-gray-500 text-white font-semibold rounded-lg py-2 ">
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mt-16 p-1 overflow-hidden bg-slate-100">
        {members.map((member) => (
          <ProfileCard key={member.id} member={member}></ProfileCard>
        ))}
      </div>
    </div>
  );
};
