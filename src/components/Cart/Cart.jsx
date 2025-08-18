import { BiSolidSortAlt } from "react-icons/bi";

const Cart = () => {
    return (
        <div>
            <div className="flex items-center justify-around my-10">
                <h1 className="text-3xl font-bold">Cart</h1>
                <div className="flex items-center gap-5">
                    <p className="text-xl font-semibold">Total cost: $ <span className="font-bold">10000</span></p>
                    <button className="btn btn-outline text-[#9538E2] px-6 font-semibold p-2 rounded-full">Sort by Price <BiSolidSortAlt className="text-lg" /></button>
                    <button className="btn btn-outline text-white bg-[#9538E2] px-10 font-semibold p-2 rounded-full">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;