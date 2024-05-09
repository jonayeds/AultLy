import { Outlet } from "react-router-dom";
import Nav from "./Componenets/Nav";


const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;