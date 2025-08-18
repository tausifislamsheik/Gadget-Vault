import { MdDeleteForever } from "react-icons/md";

const Cart = ({cart}) => {
    const {image, name, price, features} = cart;
    return (
        <div className="mx-10 lg:mx-40 mb-5">
            <div className="hero bg-base-200 justify-start rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src={image}
                    className="w-52 h-56 object-cover rounded-lg bg-gray-200 p-5"
                    />
                    <div className="flex">
                         <div>
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="font-bold py-1">Price: $ {price}</p>
                    {
                        features.map(feature => <li className="text-gray-400">{feature}</li>)
                    }
                    </div>
                    <div className="justify-end">
                        <MdDeleteForever  />
                    </div>
                    </div>
                    
                
                </div>
            </div>
        </div>
    );
};

export default Cart;