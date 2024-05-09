import { useEffect, useState } from "react";
import {  Link, NavLink } from "react-router-dom";


const Nav = () => {
    const navigation = <>
    <NavLink><li><a>Home</a></li></NavLink>
    <NavLink><li><a>Queries</a></li></NavLink>
    <NavLink><li><a>Recommendations for me</a></li></NavLink>
    <NavLink><li><a>My Queries</a></li></NavLink>
    <NavLink><li><a>My Recommendations</a></li></NavLink>
    
        </>
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
    console.log(theme)
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navigation
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
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
  <Link to={'/login'} href="#_" className="relative inline-flex items-center justify-center py-2 px-7  overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-400 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-400 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-purple-400 transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
<span className="relative invisible">Login</span>
</Link>
  </div>
</div>
    );
};

export default Nav;