import { useLoaderData, useParams } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { addCartToLS, addWishlistToLS } from "../../Utility/addToLS";


const ProductDetails = () => {
    const {id} = useParams();
    const idNum = parseInt(id)
    const products = useLoaderData();
    const product = products.find(product => product.id === idNum);
    const {image, name, price, features, rating, warranty, brand} = product; 

    const handleAddToCart = (id) =>{
        addCartToLS(id)
    }
    const handleWishlist = (id) =>{
        addWishlistToLS(id)
    }

    return (
        <div>
            <div className="bg-[#9538E2] text-center text-white pb-44 mx-4 lg:mx-12">
                <h1 className="text-xl lg:text-3xl font-bold mb-3">Product Details</h1>
                <p className="text-gray-200 text-sm">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="-mt-32 mx-20 lg:mx-52 mb-32">
                <div className="bg-white rounded-2xl border border-gray-300">
                    <div className="hero-content justify-start flex-col lg:flex-row">
                        <img
                        src={image}
                        className="lg:w-4/12 bg-gray-200 lg:py-20 lg:p-10 rounded-lg"
                        />
                        <div className="space-y-2">
                        <h1 className="text-2xl lg:text-3xl font-bold">{name}</h1>
                        <p className="font-semibold text-gray-500">Price: $ {price}</p>
                        <p className="text-[#309C08] text-sm border border-[#309C08] bg-[#309C081A] inline-block px-2 font-semibold rounded-3xl">Brand: {brand}</p>
                        <p className="font-bold">Specification:</p>
                        <ol className="text-gray-500"> 
                        {
                            features.map(feature => <li>{feature}</li>)
                        } 
                        </ol>
                        <div className="font-bold items-center">Rating : <br />
                          <div class="rating rating-sm mr-3">
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <span className="bg-gray-100 p-1 rounded-lg">{rating}</span>
                        </div>
                        <p className="font-semibold">Warranty: {warranty}</p>
                        <div className="items-center">
                              <button onClick={() => handleAddToCart(id)} className="btn bg-[#9538E2] text-white rounded-3xl mr-3">Add To Cart  <IoMdCart className="text-xl" /></button>
                                <button onClick={() => handleWishlist(id)} className="btn btn-circle text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                                </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetails;