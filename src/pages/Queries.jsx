import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
    const allQueries = useLoaderData()
    console.log(allQueries)
    return (
        <div className="mt-20">
            <div>
                <h1 className="text-4xl text-center ">All <span className="font-logo text-[#3e939b]">queries</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {
                    allQueries.map(query=><div key={query._id} className="mx-auto flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md ">
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
                        <p className=" flex items-start gap-1">
                            <span>Recommendations:</span> <span className="text-[#3e939b] text-xl">{query.recommendationCount}</span>
                        </p>
                    </div>
                    <Link to={`/queryDetails/${query._id}`} className="btn bg-[#15b5c3] text-white">Recommend</Link>
                    
                </div>)
                }
            </div>
        </div>
    );
};

export default Queries;