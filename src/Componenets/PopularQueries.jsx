import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PopularQueries = () => {
    const [queries, setQueries] = useState([])
    useEffect(()=>{
        fetch('https://aultly-server.vercel.app/queries')
        .then(res=> res.json())
        .then(data=> {
            setQueries(data)
            // console.log(data)
        })
    },[])
    // console.log(queries)
    const sortedQueries = queries.sort((a,b)=>{
        const sortedA = parseInt(a.recommendationCount)
        const sortedB = parseInt(b.recommendationCount)
        if(sortedA > sortedB){
            return -1
        }
        else{
            return 0
        }
    })
    // console.log("sorted ",sortedQueries)
    return (
        <div  className="mt-32">
        <h1 className="text-center text-4xl ">Popular <span className="text-[#3e939b] font-logo">Queries</span></h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
       {
            sortedQueries.slice(0, 6).map(query=><Link to={`/queryDetails/${query._id}`} key={query._id} className="card  group h-96 bg-base-100 shadow-xl image-full">
            <figure><img src={query.image} alt="query" className="w-full group-hover:scale-110 duration-700" /></figure>
            <div className="md:px-8 px-4 h-full w-full flex justify-center items-start flex-col text-white z-10 ">
              <h2 className="card-title text-3xl text-[#70a4b4]">{query.name}</h2>
              <p>{query.title}</p>
              <p>Recommendations: {query.recommendationCount}</p>
              
            </div>
          </Link>)
        }
       </div>
    </div>
    );
};

export default PopularQueries;