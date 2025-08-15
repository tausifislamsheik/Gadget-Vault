import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    const navList = <>
    <li><NavLink>Home</NavLink></li>
    <li><NavLink>Statistics</NavLink></li>
    <li><NavLink>Dashboard</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {navList}
                </ul>
                </div>
                <h1 className="cursor-pointer font-bold text-xl">Gadget Vault</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-5 menu-horizontal px-1">
                {navList}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn btn-circle text-xl">
                <FiShoppingCart />
                </button>
                 <button className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                </button>
            </div>
         </div>
    );
};

export default Navbar;