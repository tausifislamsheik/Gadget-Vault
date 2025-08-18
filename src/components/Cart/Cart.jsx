

const Cart = ({cart}) => {
   console.log(cart)
    const {image, name, price, features} = cart;
    return (
        <div className="mx-40 mb-5">
            <div className="hero bg-base-200 justify-start rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src={image}
                    className="w-40 rounded-lg bg-gray-200 p-5"
                    />
                    <div>
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="font-bold py-1">Price: $ {price}</p>
                    {
                        features.map(feature => <li className="text-gray-400">{feature}</li>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;