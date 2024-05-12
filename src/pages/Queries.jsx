import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
  const allQueries = useLoaderData();
  const [queries, setQueries] = useState(null);
  const [col, setCol] = useState(3);

  // console.log(allQueries)
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    if (search) {
      setQueries(allQueries.filter((query) => query.name == search));
    } else {
      setQueries(allQueries);
    }
    console.log(queries);
  };
//   console.log(queries);
  const handleLayout = cols =>{
    if(cols == 1){
        setCol(1)
    }else if(cols == 2){
        setCol(2)
    }else if(cols == 3){
        setCol(3)
    }
}
console.log(col)
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-4xl text-center ">
          All <span className="font-logo text-[#3e939b]">queries</span>
        </h1>
      </div>
      <form action="" onSubmit={handleSearch}>
        <div className="flex justify-center mt-10 ">
          <input
            type="text"
            name="search"
            className="bg-gray-500 px-4 rounded-l-lg bg-opacity-30 outline-none"
          />
          <button
            type="submit"
            className="bg-[#3e939b] py-1 text-white px-3 rounded-r-lg"
          >
            search
          </button>
        </div>
      </form>
      <div className="mt-10 md:flex justify-center hidden ">
        
        <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#3e939b] text-white">Layout<FaChevronDown /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>handleLayout(1)}><a>1 col</a></li>
    <li onClick={()=>handleLayout(2)}><a>2 col</a></li>
    <li className="lg:flex hidden" onClick={()=>handleLayout(3)}><a>3 col</a></li>
   
    
  </ul>
</div>
          
        
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-${col} lg:grid-cols-${col} gap-8 mt-12`}>
        {(queries ? queries : allQueries).map((query) => (
          <div
            key={query._id}
            className="mx-auto flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md "
          >
            <div className="flex space-x-4">
              <img
                alt=""
                src={query.photoURL}
                className="object-cover w-12 h-12 rounded-full shadow "
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  {query.displayName}
                </a>
                <span className="text-xs ">{query.currentDate}</span>
              </div>
            </div>
            <div>
              <img
                src={query.image}
                alt=""
                className="object-cover w-full mb-4 h-60 sm:h-96 "
              />
              <p className="text-[#3e939b] font-bold text-lg">{query.brand}</p>
              <h2 className="mb-1 text-xl font-semibold">{query.title}</h2>
              <p className="text-2xl font-bold opacity-60 ">{query.name}</p>
              <p className="font-bold ">
                Alternation Reason:{" "}
                <span className="font-medium">{query.details}</span>
              </p>
              <p className=" flex items-start gap-1">
                <span>Recommendations:</span>{" "}
                <span className="text-[#3e939b] text-xl">
                  {query.recommendationCount}
                </span>
              </p>
            </div>
            <Link
              to={`/queryDetails/${query._id}`}
              className="btn bg-[#15b5c3] text-white"
            >
              Recommend
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;
