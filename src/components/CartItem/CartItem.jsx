import { MdDeleteForever } from "react-icons/md";

const CartItem = ({ cart, handleRemove }) => {
    const { id, image, name, price, features } = cart;
    return (
        <div className="mx-10 lg:mx-40 mb-5">
            <div className="hero flex lg:justify-between bg-base-200 rounded-2xl">
                <div className="hero-content lg:flex flex-col lg:flex-row">
                    <img
                        src={image}
                        alt={name}
                        className="w-52 h-56 object-cover rounded-lg bg-gray-200 p-5"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="font-bold py-1">Price: $ {price}</p>
                        {features.map((feature, i) => (
                            <li key={i} className="text-gray-400">{feature}</li>
                        ))}
                    </div>
                </div>
                <div className="mr-16">
                    <MdDeleteForever 
                        onClick={() => handleRemove(id)} 
                        className="text-3xl text-red-600 hover:text-red-700 cursor-pointer" 
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
