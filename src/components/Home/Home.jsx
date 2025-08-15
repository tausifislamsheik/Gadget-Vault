import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="bg-[#9538e2] text-white mx-4 lg:mx-12 mt-4 lg:mt-10 lg:px-20 rounded-2xl">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;