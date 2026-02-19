

const ProductCard = ({drop}) => {
    return (
        <div
            key={drop.id}
            className="bg-neutral-100 flex flex-col rounded-3xl p-4 hover:scale-[1.02] transition duration-300"
        >

            {/* image container */}
            <div className="relative bg-gray-200 rounded-3xl p-2 flex items-center justify-center">

                {/* NEW badge */}
                <span className="absolute top-2 left-2 bg-indigo-500 text-white text-xs px-4 py-2 rounded-br-2xl rounded-tl-2xl font-semibold">
                    New
                </span>

                <img
                    src={drop?.images?.[0]}
                    alt={drop.title}
                    className="w-full object-contain rounded-2xl"
                />
            </div>

            {/* title */}
            <h3 className="mt-5 font-bold text-lg leading-tight uppercase text-neutral-800">
                {drop.title}
            </h3>

            {/* button */}
            <button className="mt-2 text-sm w-full bg-neutral-900 text-white py-3 rounded-xl font-semibold tracking-wide hover:bg-black transition cursor-pointer">
                VIEW PRODUCT - <span className="text-yellow-400">${drop.price}</span>
            </button>

        </div>
    );
};

export default ProductCard;