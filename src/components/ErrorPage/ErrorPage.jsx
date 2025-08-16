import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-72 space-y-5">
            <h1 className="text-4xl md:text-7xl font-bold">Oops!</h1>
            <p className="text-gray-400 text-sm md:text-xl">Page not found</p>
            <Link to='/'><button className="btn mt-10 text-[#9538E2] lg:text-lg font-semibold bg-white p-2 px-4 rounded-full border-[#9538E2]">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;