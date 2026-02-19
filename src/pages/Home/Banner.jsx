import { useState } from "react";


const Banner = () => {
    const [active, setActive] = useState(0);
    const images = [
        "/banner_img_1.jpg",
        "/banner_img_2.jpg",
        "/banner_img_3.jpg",
    ];

    return (
        <section className="w-full flex justify-center bg-neutral-100 py-6 md:py-10">
            <div className="w-[95%] max-w-6xl">

                {/* Heading */}
                <h1 className="text-4xl w-full text-center md:text-[160px] font-extrabold tracking-wider mb-6 md:mb-10">
                    <span className="text-black">DO IT </span>
                    <span className="text-[#4A69E2]">RIGHT</span>
                </h1>


                {/* Banner */}
                <div className="relative rounded-3xl overflow-hidden">
                    <img
                        src={images[active]}
                        alt="shoe"
                        className="w-full h-105 md:h-130 object-cover"
                    />

                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                    {/* vertical badge */}
                    <div className="absolute left-3 md:-left-6 top-1/3 -translate-y-1/2 rotate-90">
                        <span className="bg-black  text-white text-sm px-3 py-2 rounded-b-lg rotate-180 inline-block">
                            Nike product of the year
                        </span>
                    </div>

                    {/* text */}
                    <div className="absolute flex flex-col justify-start bottom-6 md:bottom-8 left-6 md:left-10 text-white max-w-xs md:max-w-md">
                        <h2 className="text-3xl md:text-5xl font-bold">NIKE AIR MAX</h2>
                        <p className="mt-2 md:mt-3 text-sm md:text-base text-white/90">
                            Nike introducing the new air max for everyone's comfort
                        </p>
                        <button className="mt-3 text-sm w-1/3 bg-[#4A69E2] hover:bg-indigo-600 transition px-3 py-2 rounded-lg font-semibold cursor-pointer">
                            SHOP NOW
                        </button>
                    </div>

                    {/* thumbnails */}
                    <div className="absolute right-3 md:right-6 bottom-6 md:bottom-10 flex flex-col gap-3">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 ${active === i ? "border-white" : "border-transparent"
                                    }`}
                            >
                                <img src={img} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;