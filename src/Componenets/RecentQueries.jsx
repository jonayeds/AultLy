import { useEffect, useState } from "react";

const RecentQueries = () => {
    const [queries, setQueries] = useState([])
    useEffect(()=>{
        fetch(`https://aultly-server.vercel.app/queries`)
        .then(res=> res.json())
        .then(data =>{
            setQueries(data)
        })
    },[])
    // console.log(queries)
    const sortedQueries = queries.sort((a,b)=>{
        const sortedA = parseInt(a.time)
        const sortedB = parseInt(b.time)
        if(sortedA > sortedB){
            return -1
        }
        else{
            return 0
        }
    })
    console.log("sorted ",sortedQueries)
    return (
        <div  className="mt-32">
            <h1 className="text-center text-4xl ">Recent <span className="text-[#3e939b] font-logo">Queries</span></h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
           {
                sortedQueries.slice(0, 6).map(query=><div key={query._id} className="mx-auto flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md ">
                <div className="flex space-x-4">
                    <img alt="" src={query.photoURL} className="object-cover w-12 h-12 rounded-full shadow " />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{query.displayName}</a>
                        <span className="text-xs ">{query.currentDate}</span>
                    </div>
                </div>
                <div>
                    <img src={query.image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 " />
                    <p className="text-[#3e939b] font-bold text-lg">{query.brand}</p>
                    <h2 className="mb-1 text-xl font-semibold">{query.title}</h2>
                    <p className="text-2xl font-bold opacity-60 ">{query.name}</p>
                    <p className="font-bold ">
                        Alternation Reason: <span className="font-medium">{query.details}</span>
                    </p>
                    
                </div>
               
                
            </div>)
            }
           </div>
        </div>
    );
};

export default RecentQueries;