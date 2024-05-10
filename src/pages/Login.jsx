import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <div className="min-h-[calc(100vh-70px)] flex flex-col justify-center items-center">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8   ">
        <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
        <p className="text-sm text-center ">Dont have account?
            <Link to={'/signup'} href="#" rel="noopener noreferrer" className="focus:underline hover:underline hover:text-[#588f95] ml-2">Sign up here</Link>
        </p>
        <div className="my-6 space-y-4">
            <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 group">
                
                    
            <FaGoogle  className="group-hover:text-[#65a5ac]"/>
                
                <p>Login with Google</p>
            </button>
            <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 group">
            <FiGithub className="group-hover:text-[#65a5ac] text-lg"/>
                <p>Login with GitHub</p>
            </button>
           
        </div>
        <div className="flex items-center w-full my-4">
            <hr  className="w-full " />
            <p className="px-3 ">OR</p>
            <hr  className="w-full " />
        </div>
        <form noValidate="" action="" className="space-y-8">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-3  rounded-md  border" />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-3 rounded-md outline-none border" />
                </div>
            </div>
            <a href="#_" className="relative inline-flex items-center px-12 py-2 w-full text-center overflow-hidden text-lg font-medium text-[#5d99a0] border-2 border-[#5a949a] rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-[#5c979d] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative mx-auto">Button Text</span>
</a>
        </form>
    </div>
        </div>
    );
};

export default Login;