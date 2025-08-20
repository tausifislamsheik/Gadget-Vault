import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import SidebarSec from "../SidebarSec/SidebarSec";
import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Gadget Vault | Home</title>
            </Helmet>
            <div className="bg-[#9538e2] text-white mx-4 lg:mx-12 lg:px-20 rounded-b-2xl">
                <Banner></Banner>
            </div>
            
            <div className="mt-20 lg:mt-96 mb-20">
                <h1 className='text-4xl font-semibold text-center py-20'>Explore Cutting-Edge Gadgets</h1>
                <div className="lg:flex mx-14">
                    <SidebarSec></SidebarSec>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;