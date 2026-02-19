import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const NewDrops = () => {
    const [drops, setDrops] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => setDrops(data));
    }, []);

    return (
        <section className="w-full flex justify-center bg-neutral-100 py-6 md:py-10">
            <div className="w-[95%] max-w-6xl">

                {/* heading */}
                <div className="flex justify-between items-center">
                    <h5 className="text-black font-bold text-3xl mb-6">
                        DON&apos;T MISS OUT <br /> NEW DROPS
                    </h5>
                    <button className="bg-indigo-500 text-sm leading-tight text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-800 transition cursor-pointer">
                        SHOP NEW DROPS
                    </button>

                </div>

                {/* products */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {drops.slice(0, 4).map((drop) => (
                        <ProductCard drop={drop}></ProductCard>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default NewDrops;
