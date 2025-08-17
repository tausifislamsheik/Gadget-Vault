const Phone = ({phone}) => {
    const {image,name,price} = phone;
    return (
        <div className="card p-5 h-96 border border-gray-300">
            <figure className="bg-gray-50 p-5">
                <img
                className="h-40"
                src={image}
                alt="Gadgets" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <p className="text-gray-500 font-semibold">Price: $ {price}</p>
                <div className="card-actions justify-end">
                <button className="btn text-[#9538E2] hover:bg-[#9538E2] hover:text-white mt-6 font-semibold bg-white p-2 px-4 rounded-full border-[#9538E2]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Phone;