import { useLoaderData, useNavigate} from "react-router-dom";
import useAuth from "../custom hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
const QueryDetails = () => {
    const {auth} = useAuth()
    const recommender = auth.currentUser
    const recommenderName = recommender?.displayName
    const recommenderEmail = recommender?.email
    // date
    
	const date = new Date()
	const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const recommendationDate = `${day}-${month}-${year}`;


const navigate = useNavigate()

    const query = useLoaderData()
    
    
    // console.log(query)
    const {title, recommendationCount, image, displayName, name, brand,photoURL , currentDate, details, _id} = query
    // console.log(query)
    const queryId = _id
    const handleRecommendation = e =>{
        if(!recommender){
            navigate('/login')
            return
        }
        e.preventDefault()
        const form = e.target
        const recommendationTitle = form.title.value
        const recommendationImage = form.image.value
        const recommendationReason = form.details.value
        const recommendationName = form.name.value
        
        const recommendation = {recommendationImage, recommendationName, recommendationReason,recommendationTitle, queryId , title, displayName, photoURL,recommendationDate, recommenderEmail, recommenderName }
        fetch('http://localhost:5000/recommendations', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(recommendation)
        })
        .then(res=> res.json())
        .then(()=>{
            fetch(`http://localhost:5000/queryDetails/${_id}`, {
                method: 'PUT',
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(query)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
                Swal.fire({
                    title: 'Are You Sure?',
                    text: 'Add recommendation',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Add',
                    confirmButtonColor: 'green',
                    cancelButtonText: 'Cancel',
                    
                }).then(()=>{
                    window.location.reload()

                })
            })
        })
    } 
    
    const [recommendations , setRecommendations] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/recommendations/${queryId}`)
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            setRecommendations(data)
        })
    },[])
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 ">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={image} alt="" className=" " />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-500 text-white">
                <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{title}</a>
			<div className="space-y-2 flex items-center justify-between">
				<div className="">
				<p className="text-xs flex items-center gap-2"><img src={photoURL} className="rounded-full w-8" alt="" /> <span className="font-semibold text-sm opacity-80">{displayName}</span>
				</p>
                </div>
                <p className="text-sm opacity-80">Uploaded on: {currentDate}</p>
			</div>
            <div>
            <p className="text-xl font-bold opacity-70">{name}</p>
            <p className="text-xl font-bold text-[#204c50]">{brand}</p>
            </div>
            <div>
                <p className="opacity-70">Alternation Reason: {details}</p>
            </div>
			<div className="">
				<p>Recommendations: {recommendationCount}</p>
			</div>
		</div>
	</div>
</div>
<div>
    <h1 className="text-4xl text-center">Add a <span className="font-logo text-[#3e939b]">Recommendation</span></h1>
    <form onSubmit={handleRecommendation} className="  flex flex-col mx-auto space-y-12 my-10">
		<fieldset className="flex items-center flex-col lg:flex-row justify-center gap-x-24   rounded-md shadow-sm ">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Title</label>
					<input id="firstname" type="text" name="title" placeholder="Title" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Product Name</label>
					<input required id="firstname" type="text" placeholder="Product Name" name="name" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Product Image</label>
					<input id="firstname" name="image" type="text" placeholder="Image URL" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Recommendation Reason</label>
					<input id="firstname" name="details" type="text" placeholder="Reason" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>

				
				
                <button type="submit" className="btn col-span-full bg-[#7ba0ab] text-white hover:bg-[#5d808b]">Add Recommendation</button>
			</div>
		</fieldset>
		
	</form>
</div>
<div className="space-y-6 text-white max-w-max mx-auto">
    {
        recommendations.map(recommendation=> <div key={recommendation._id} className="flex flex-col md:flex-row items-center bg-gray-700 bg-opacity-50 rounded-xl p-8 md:justify-around lg:justify-center gap-12" > 
                    <img src={recommendation.recommendationImage} alt="" className="w-52 rounded-xl" />
                    <div>
                        <div className="flex items-center justify-between gap-x-10">
                        <p>By {recommendation.recommenderName}</p>
                        <p className="text-sm opacity-80">{recommendation.recommendationDate}</p>
                        </div>
                        <p className="font-semibold text-[#3e939b]">{recommendation.recommendationName}</p>
                        <h1 className="card-title">{recommendation.recommendationTitle}</h1>
                        <p className="text-sm mt-2">{recommendation.recommendationReason}</p>

                    </div>
        </div>)
    }
</div>
        </div>
    );
};

export default QueryDetails;