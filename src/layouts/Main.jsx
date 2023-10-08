import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Main = () => {
    return (
        <div className="w-full md:w-3/4 mx-auto bg-slate-50">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;