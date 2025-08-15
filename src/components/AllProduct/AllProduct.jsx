const AllProduct = ({allProduct}) => {
    const {image, name, price} = allProduct
    return (
        <div>
            <div className="card shadow-sm">
            <figure className="bg-gray-50 p-5">
                <img
                className="h-40"
                src={image}
                alt="Gadgets" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: $ {price}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AllProduct;