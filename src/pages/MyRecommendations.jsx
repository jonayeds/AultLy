import { useEffect, useState } from "react";
import useAuth from "../custom hooks/useAuth";

const MyRecommendations = () => {
  const { auth } = useAuth();
  const [recommendations, setRecommendations] = useState([]);
  const user = auth.currentUser;
  useEffect(() => {
    fetch(
      `http://localhost:5000/recommendations/myRecommendations/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setRecommendations(data);
      });
  }, [user]);
  const handleDelete = (id)=>{
    fetch(`http://localhost:5000/recommendations/myRecommendations/${id}`, {
        method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
    })
  }
  return (
    <div className="mt-16 text-center">
      <h1 className="text-4xl">
        <span className="font-logo text-[#3e939b] ">My</span> Recommendations
      </h1>
      <div>
      <div className="container p-2 mx-auto sm:p-4 mt-12 ">
	
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				
				
			</colgroup>
			<thead className="text-center">
				<tr className="">
					<th className="p-3">Recommendation</th>
					<th className="p-3">For</th>
					<th className="p-3">To</th>
					
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody>
				{
                    recommendations.map(recommendation=> <tr key={recommendation._id} className="border-b border-opacity-20 ">
					<td className="p-3">
						<p>{recommendation.recommendationName}</p>
					</td>
					<td className="p-3">
						<p>{recommendation.name}</p>
					</td>
					<td className="p-3">
						
						<p className="">{recommendation.displayName}</p>
					</td>
					
					<td className="p-3 ">
						<button onClick={()=>handleDelete(recommendation._id)} className="btn bg-red-600  text-white">Delete</button>
					</td>
				</tr>)
                }
				
			</tbody>
		</table>
	</div>
</div>
      </div>
    </div>
  );
};

export default MyRecommendations;
