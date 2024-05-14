import { Outlet } from "react-router-dom";
import Nav from "./Componenets/Nav";
import Footer from "./Componenets/Footer";


const Layout = () => {
    return (
        <div>
            
           <div className="h-[70px] ">
           <div className="   fixed   z-50 w-full">  
            <Nav></Nav>
            </div>
           </div>
            <div className="container mx-auto">  
           
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;