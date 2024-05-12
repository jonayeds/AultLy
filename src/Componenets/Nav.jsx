import { useEffect, useState } from "react";
import {  Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../custom hooks/useAuth";
import { Tooltip } from 'react-tooltip'

const Nav = () => {
  const {logOut, auth} = useAuth()
  const user =  auth.currentUser
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      navigate('/')
    })
  }
  const navigation = <>
    <NavLink className={({isActive})=> isActive? 'text-[#3e939b] hover:scale-110 duration-200 ': 'hover:scale-110 duration-200'} to={'/'}><li><a>Home</a></li></NavLink>
    <NavLink to={'/queries'} className={({isActive})=> isActive? 'text-[#3e939b] hover:scale-110 duration-200 ': 'hover:scale-110 duration-200'}><li><a>Queries</a></li></NavLink>
    { user && <NavLink to={'/recommendationsForMe'} className={({isActive})=> isActive? 'text-[#3e939b] hover:scale-110 duration-200 ': 'hover:scale-110 duration-200'}  ><li><a>Recommendations for me</a></li></NavLink> }
    { user && <NavLink to={'/myQueries'} className={({isActive})=> isActive? 'text-[#3e939b] hover:scale-110 duration-200 ': 'hover:scale-110 duration-200'}><li><a>My Queries</a></li></NavLink> }
    { user && <NavLink className={({isActive})=> isActive? 'text-[#3e939b] hover:scale-110 duration-200 ': 'hover:scale-110 duration-200'} to={'/myRecommendations'}><li><a>My Recommendations</a></li></NavLink> }
   
    
    
        </>
        const navigate = useNavigate()
    const loadedTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(loadedTheme)
    const handleTheme = e =>{
        if(e.target.checked){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    useEffect(()=>{
        localStorage.setItem('theme' , theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-20">
        {
            navigation
        }
        {
          user && <li>
          <button onClick={handleLogOut} className="relative   items-center justify-center py-2 px-7  overflow-hidden font-medium text-[#65a5ac] transition duration-300 ease-out border-2 border-[#7ba0ab] rounded-full shadow-md group ">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#7ba0ab] group-hover:translate-x-0 ease">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full tp transition-all duration-300 transform group-hover:translate-x-full ease">Logout</span>
      <span className="relative invisible">Logout</span>
      </button>
          </li>
        }
      </ul>
    </div>
    <Link className= {`btn btn-ghost text-2xl  hover:bg-transparent   font-logo ${theme === 'dark' ? "text-[#a7c4cd]": 'text-[#64a3aa]'} duration-700`}>AultLy</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        navigation
     }
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
  <input onChange={handleTheme} defaultChecked={loadedTheme === 'dark'? true: false} type="checkbox" value="synthwave"  className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
  {
    user? <div className="flex gap-4"> <a
    data-tooltip-id="my-tooltip"
    data-tooltip-content={user.displayName}
    data-tooltip-place="top"
    
  >
  <Tooltip id="my-tooltip"   style={{ backgroundColor: "#7ba0ab", color: "white" }} className="font-bold z-50" />
  <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full border-green-500 border-[3px] border-solid" />
  </a>
      <button onClick={handleLogOut} className="relative hidden md:flex  items-center justify-center py-2 px-7  overflow-hidden font-medium text-[#65a5ac] transition duration-300 ease-out border-2 border-[#7ba0ab] rounded-full shadow-md group">
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#7ba0ab] group-hover:translate-x-0 ease">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="absolute flex items-center justify-center w-full h-full tp transition-all duration-300 transform group-hover:translate-x-full ease">Logout</span>
    <span className="relative invisible">Logout</span>
    </button>
    </div> : <Link to={'/login'} href="#_" className="relative inline-flex items-center justify-center py-2 px-7  overflow-hidden font-medium text-[#65a5ac] transition duration-300 ease-out border-2 border-[#7ba0ab] rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#7ba0ab] group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full tp transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
<span className="relative invisible">Login</span>
</Link>
  }
  

  </div>
</div>
    );
};

export default Nav;