import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories")
            .then(res => res.json())
            .then(data => {
                const valid = data.filter(item =>
                    item.image &&
                    (item.image.endsWith(".jpg") ||
                        item.image.endsWith(".jpeg") ||
                        item.image.endsWith(".png") ||
                        item.image.endsWith(".webp"))
                );
                setCategories(valid);
                // setCategories(valid.slice(0, 6));
            });
    }, []);

    const scroll = (direction) => {
        if (!sliderRef.current) return;
        const cardWidth = sliderRef.current.querySelector(".snap-start")?.offsetWidth || 400;
        const gap = 24; // gap-6
        sliderRef.current.scrollBy({
            left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full flex justify-center relative bg-[#232321] pt-6 md:pt-10 overflow-x-hidden">
            <div className="w-[95%] max-w-7xl">

                {/* heading */}
                <div className="flex justify-between items-center mb-6">
                    <h5 className="text-white font-bold text-4xl md:text-5xl">
                        CATEGORIES
                    </h5>

                    {/* nav buttons */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => scroll("prev")}
                            className="w-14 h-14 flex items-center justify-center bg-[#6b6b69] hover:bg-[#555553] text-white rounded-2xl transition active:scale-95"
                        >
                            <ChevronLeft size={22} strokeWidth={2.5} />
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll("next")}
                            className="w-14 h-14 flex items-center justify-center bg-[#e9e9e4] hover:bg-[#d4d4cf] text-[#1a1a1a] rounded-2xl transition active:scale-95"
                        >
                            <ChevronRight size={22} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* slider */}
                <div className="relative">
                    <div className="ml-0 mr-[calc((100vw-100%)/-2)]">
                        <div
                            ref={sliderRef}
                            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pl-10 pr-0 rounded-tl-4xl"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {categories.map(cat => (
                                <div
                                    key={cat.id}
                                    className="group bg-[#e9e9e9] shrink-0 snap-start basis-[calc((100vw-1.5rem)/2)] max-w-130 h-65 md:h-96
                               flex flex-col overflow-hidden"
                                >
                                    {/* IMAGE */}
                                    <div className="h-[70%] w-full bg-[#f3f3f3] flex items-center justify-center overflow-hidden">
                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div className="h-[30%] flex items-center justify-between px-6">
                                        <h2 className="text-xl md:text-2xl font-bold uppercase text-[#1a1a1a]">
                                            {cat.name}
                                        </h2>

                                        <button className="bg-black text-white p-3 rounded-lg opacity-90 group-hover:scale-110 transition">
                                            <ArrowUpRight size={18} />
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Categories;