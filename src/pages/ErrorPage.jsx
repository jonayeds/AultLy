import { Link } from "react-router-dom";

import error from '../assets/error.png'
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <section className="flex items-center h-full lg:p-16 ">
	<div className="container flex flex-col items-center justify-center md:px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-6 ">
				<img src={error} alt="" />
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn`t find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to={'/'} rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded  bg-[#5f808a] text-white">Back to homepage</Link>
		</div>
	</div>
</section>
        </div>
    );
};

export default ErrorPage;