import useAuth from "../custom hooks/useAuth";
import Swal from "sweetalert2";
const AddQueries = () => {
    const {auth} = useAuth()
    const user = auth.currentUser
    const {displayName, email, photoURL} = user
    const time = Date.now()
	const date = new Date()
	let day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${day}-${month}-${year}`;
console.log("date",currentDate); 
  
    // console.log(displayName, email, photoURL)
    const handleAddQuery = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const brand = form.brand.value
        const details = form.details.value
        const title = form.title.value
        const query = {name, image, brand, details, title, displayName, email,  photoURL, recommendationCount: 0, time, currentDate}
        console.log(query)
        fetch(`https://aultly-server.vercel.app/queries`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(query)
        })
        .then(res=>res.json())
        .then(()=>{
            Swal.fire({
				title: 'Successful',
				text: 'Successfully added Query',
				icon: 'success',
				confirmButtonText: 'OK'
			})
			form.reset()
        })
        
    }
    return (
        <div className="min-h-[calc(100vh-70px)] flex flex-col justify-center items-center ">
            <section className="p-6  w-full">
	<form onSubmit={handleAddQuery} className="  flex flex-col mx-auto space-y-12">
		<fieldset className="flex items-center flex-col lg:flex-row justify-center gap-x-24   rounded-md shadow-sm ">
			<div className=" text-3xl ">
				<p className="font-medium my-10">Add Your <span className="font-logo text-[#5f818b] font-semibold">Query</span></p>
				
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Product Name</label>
					<input id="firstname" type="text" placeholder="Product Name" name="name" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Product Brand</label>
					<input id="firstname" name="brand" type="text" placeholder="Brand" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Product Image</label>
					<input id="firstname" name="image" type="text" placeholder="Image URL" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Query Title</label>
					<input id="firstname" type="text" name="title" placeholder="Title" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>
				<div className="col-span-full ">
					<label htmlFor="firstname" className="text-sm">Boycotting Reason Details</label>
					<input id="firstname" name="details" type="text" placeholder="First name" className="w-full rounded-md  px-4 py-3 bg-gray-400 bg-opacity-20 outline-none" />
				</div>

				
				
                <button type="submit" className="btn col-span-full bg-[#7ba0ab] text-white hover:bg-[#5d808b]">Add Query</button>
			</div>
		</fieldset>
		
	</form>
</section>
        </div>
    );
};

export default AddQueries;