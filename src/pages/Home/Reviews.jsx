import { Star } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            short_msg: "Good Quality",
            message: "I highly recommend shopping from kicks",
            client_img: "/client_1.jpg",
            product_img: "/product_1.png",
            stars: 5,
        },
        {
            id: 2,
            short_msg: "Good Quality",
            message: "I highly recommend shopping from kicks",
            client_img: "/client_2.png",
            product_img: "/product_2.png",
            stars: 5,
        },
        {
            id: 3,
            short_msg: "Good Quality",
            message: "I highly recommend shopping from kicks",
            client_img: "/client_3.png",
            product_img: "/product_3.png",
            stars: 5,
        },
    ]
    return (
        <section className="w-full flex justify-center bg-neutral-100 py-6 md:py-10">
            <div className="w-[95%] max-w-7xl">
                {/* heading */}
                <div className="flex justify-between items-center">
                    <h5 className="text-black font-bold text-3xl mb-6">
                        REVIEWS
                    </h5>
                    <button className="bg-indigo-500 text-sm leading-tight text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-800 transition cursor-pointer">
                        See all
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {
                        reviews.map(review => (
                            <div className="bg-white rounded-2xl" key={review.id}>
                                <div className="p-5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col space-y-2 text-black">
                                            <h3 className="text-xl font-semibold">{review.short_msg}</h3>
                                            <p className="text-sm">{review.message}</p>
                                        </div>
                                        <div>
                                            <img src={review.client_img} alt="Client" className="w-12 h-12 rounded-full object-cover" />
                                        </div>
                                    </div>
                                    <div className='flex items-center text-lg'>
                                        <Star className='w-5 text-amber-400 fill-amber-400' /> {parseFloat(review.stars).toFixed(1)}
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <img className='h-72 object-cover w-full rounded-b-2xl' src={review.product_img} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>



            </div>
        </section>
    );
};

export default Reviews;