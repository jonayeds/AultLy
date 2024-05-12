import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateQuery = () => {
    const query = useLoaderData()
    console.log(query)
    const {name, details, brand, image, title, email, displayName, photoURL, recommendationCount, time, _id} = query
    const handleUpdateQuery = e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const brand = form.brand.value
        const details = form.details.value
        const title = form.title.value
        const updatedQuery = {name, image, brand, details, title, email, displayName, photoURL, recommendationCount, time }
        fetch(`https://aultly-server.vercel.app/queries/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuery)
        })
        .then(res=>res.json())
        .then((data)=>{
            Swal.fire({
				title: 'Successful',
				text: 'Successfully updated Query',
				icon: 'success',
				confirmButtonText: 'OK'
			})
            console.log(data)
			
        })
    }
    return (
        <div className="min-h-[calc(100vh-70px)] flex flex-col justify-center items-center ">
            <section className="p-6  w-full">
	<form onSubmit={handleUpdateQuery} className="  flex flex-col mx-auto space-y-12">
		<fieldset className="flex items-center flex-col lg:flex-row justify-center gap-x-24   rounded-md shadow-sm ">
			<div className=" text-3xl ">
				<p className="font-medium my-10"><span className="font-logo text-[#5f818b] font-semibold">Update</span> Your Query</p>
				
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Product Name</label>
					<input id="firstname" type="text" defaultValue={name} placeholder="Product Name" name="name" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Product Brand</label>
					<input id="firstname" defaultValue={brand} name="brand" type="text" placeholder="Brand" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Product Image</label>
					<input id="firstname" name="image" type="text" placeholder="Image URL" defaultValue={image} className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Query Title</label>
					<input id="firstname" type="text" name="title" placeholder="Title" defaultValue={title} className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full ">
					<label htmlFor="firstname" className="text-sm">Boycotting Reason Details</label>
					<input id="firstname" name="details" type="text" placeholder="First name" defaultValue={details} className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>

				
				
                <button type="submit" className="btn col-span-full bg-[#7ba0ab] text-white hover:bg-[#5d808b]">Update Query</button>
			</div>
		</fieldset>
		
	</form>
</section>
        </div>
    );
};

export default UpdateQuery;