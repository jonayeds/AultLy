import { useEffect, useState } from "react";
import useAuth from "../custom hooks/useAuth";

const RecommendationsForMe = () => {
    const {auth} = useAuth()
    const user = auth.currentUser
    console.log(user.email)
    const [recommendations , setRecommendations] = useState([])
    useEffect(()=>{
        fetch(`https://aultly-server.vercel.app/recommendations/recommendationsForMe/${user?.email}`)
        .then(res=>res.json())
        .then(data =>{
            setRecommendations(data)
            // console.log(data)
        })
    },[user?.email])
    console.log(recommendations)
    return (
        <div className="mt-16 text-center">
      <h1 className="text-4xl">
        <span className="font-logo text-[#3e939b] ">Recommendations</span> For Me
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
					
					
					<th className="p-3">By</th>
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
					
					
					<td className="p-3 ">
						<p>{recommendation.recommenderName}</p>
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

export default RecommendationsForMe;