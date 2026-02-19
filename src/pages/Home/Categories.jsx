

const Categories = () => {
    return (
        <section className="w-full flex justify-center bg-neutral-100 py-6 md:py-10">
            {/* heading */}
            <div className="flex justify-between items-center">
                <h5 className="text-black font-bold text-3xl mb-6">
                    DON&apos;T MISS OUT <br /> NEW DROPS
                </h5>
                <button className="bg-indigo-500 text-sm leading-tight text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-800 transition cursor-pointer">
                    SHOP NEW DROPS
                </button>

            </div>
        </section>
    );
};

export default Categories;