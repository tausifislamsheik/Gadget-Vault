import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='flex justify-center'>
            <div className="relative space-y-8 text-center mt-10 pb-44 lg:pb-60 px-5">
                <h1 className="text-xl lg:text-5xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className='text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
                <button className="btn text-[#9538E2] lg:text-lg font-bold bg-white p-2 px-4 rounded-full border-none">Shop Now</button>
            </div>
            <div className='absolute mt-80 '>
                <img className='w-80 lg:w-[1062px] lg:h-[563px] rounded-2xl object-cover' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;