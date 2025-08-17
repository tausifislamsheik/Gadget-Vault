import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="sora">
            <div className="bg-[#9538e2] text-white mx-4 lg:mx-12 mt-10 lg:px-20 rounded-t-2xl">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;