import { useState } from "react";
import useAuth from "../custom hooks/useAuth";
import { Link } from "react-router-dom";

const MyQueries = () => {
    const {auth} = useAuth()
    const [queries, setQueries] = useState([])
    const user = auth.currentUser
    useState(()=>{
        fetch(`http://localhost:5000/queries/${user?.email}`)
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        setQueries(data)
    })
    },[])

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
        <div>
            <div className="bg-gray-500 bg-opacity-20  rounded-2xl flex justify-around items-center flex-col-reverse lg:flex-row py-24 gap-y-6">
            <div>
            <h1 className="text-4xl font-mono ">Got <span className="font-logo text-[#3e939b]">Questions?</span> <br /> Ask Away and Unlock Insights! </h1>
            <Link to={'/addQueries'} className="btn mt-4 bg-[#3e939b] text-white rounded-none shadow-2xl border-none hover:bg-[#265a5f]">Add Query</Link>
            </div>
            <img src="https://images.squarespace-cdn.com/content/v1/553445d6e4b062ec5813db3a/1462911245550-5O6GEI84C0ILPZUGWUMZ/image-asset.jpeg" alt="" className="w-64 rounded-2xl shadow-xl opacity-80" />
            </div>
            
            {
                queries.length >0 ?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-10 mt-24 "> {sortedQueries.map((query)=><div key={query._id} className="max-w-xs mx-auto p-6 rounded-md shadow-md ">
                <img src={query.image} alt="" className="object-cover object-center w-full rounded-md h-72 " />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-semibold tracking-widest uppercase text-[#3e939b]">{query.name}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{query.title}</h2>
                </div>
                <div className="flex space-y-3 flex-col ">
                    <Link to={`/queryDetails/${query._id}`} className="btn bg-[#136d75] text-white">View Details</Link>
                    <Link to={`/update/${query._id}`} className="btn text-white bg-[#5c989d]">Update</Link>
                    <button className="btn bg-red-500 text-white">Delete</button>
                </div>
            </div>)}
            </div>
            : <div className="flex flex-col justify-center items-center mt-24">
                <h1 className="text-3xl ">Looks like you haven`t added any Queries!</h1>
                <Link to={'/addQueries'} className="btn mt-4 bg-[#3e939b] text-white rounded-none shadow-2xl border-none hover:bg-[#265a5f]">Add Query</Link>
            </div>
            }
            
        </div>
    );
};

export default MyQueries;