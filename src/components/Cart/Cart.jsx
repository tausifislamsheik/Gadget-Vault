import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../Utility/addToLS";
import CartItem from "../CartItem/CartItem";

const Carts = () => {
    const [carts, setCarts] = useState([]);
    const allProducts = useLoaderData();

    useEffect(() =>{
        const storedCart = getStoredCart();
        const storedCartInt = storedCart.map(id => parseInt(id));
        const cart = allProducts.filter(cart => storedCartInt.includes(cart.id))
        setCarts(cart)
    },[allProducts])

    return (
        <div>
            {
                carts.map((cart) => <CartItem key={cart.id} cart={cart}></CartItem>)
            }
        </div>
    );
};

export default Carts;