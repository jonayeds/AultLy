import { Outlet } from "react-router-dom";
import Nav from "./Componenets/Nav";


const Layout = () => {
    return (
        <div>
            <div className="container mx-auto">  
            <Nav></Nav>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;