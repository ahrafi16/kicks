import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="w-full flex justify-center bg-neutral-100 py-6 md:py-10">
            <div className="w-[95%] max-w-7xl overflow-hidden rounded-3xl">

    
                <div className="bg-[#4A69E2] text-white rounded-t-3xl px-6 md:px-16 py-10 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                    {/* Left Content */}
                    <div className="space-y-4 max-w-xl">
                        <h3 className="text-2xl md:text-4xl font-bold uppercase">
                            Join our KicksPlus Club & get 15% off
                        </h3>
                        <p className="text-sm md:text-base text-white/80">
                            Sign up for free! Join the community.
                        </p>

                        {/* Email Input */}
                        <div className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 px-4 py-3 rounded-l-lg bg-transparent border border-white/50 focus:outline-none"
                            />
                            <button className="bg-black px-6 py-3 rounded-r-lg text-sm font-semibold hover:bg-neutral-800 transition">
                                SUBMIT
                            </button>
                        </div>
                    </div>

                    {/* Right Logo */}
                    <div className="text-5xl md:text-7xl font-extrabold opacity-90">
                        KICKS<span className="text-yellow-400 text-2xl align-top">+</span>
                    </div>
                </div>

                <div className="relative -top-5 bg-[#1E1E1E] text-white px-6 md:px-16 py-12 md:py-20 rounded-3xl overflow-hidden">

                    {/* Grid Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">

                        {/* About */}
                        <div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3">
                                About us
                            </h4>
                            <p className="text-sm text-white/70 leading-relaxed">
                                We are the biggest hyperstore in the universe.
                                We got you all cover with our exclusive collections
                                and latest drops.
                            </p>
                        </div>

                        {/* Categories */}
                        <div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3">
                                Categories
                            </h4>
                            <ul className="space-y-2 text-sm text-white/70">
                                <li>Runners</li>
                                <li>Sneakers</li>
                                <li>Basketball</li>
                                <li>Outdoor</li>
                                <li>Golf</li>
                                <li>Hiking</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3">
                                Company
                            </h4>
                            <ul className="space-y-2 text-sm text-white/70">
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blogs</li>
                            </ul>
                        </div>

                        {/* Follow */}
                        <div>
                            <h4 className="text-orange-400 font-bold text-lg mb-3">
                                Follow us
                            </h4>
                            <div className="flex gap-4 text-white/80">
                                <Facebook size={18} />
                                <Instagram size={18} />
                                <Twitter size={18} />
                                <FaTiktok size={18} />
                            </div>
                        </div>
                    </div>

                    {/* BIG BACKGROUND TEXT */}
                    <div className="absolute bottom-0 left-0 w-full text-[120px] md:text-[220px] font-extrabold text-white/5 leading-none pointer-events-none select-none">
                        KICKS
                    </div>
                </div>

                {/* ================= COPYRIGHT ================= */}
                <div className="text-center text-xs md:text-sm text-neutral-600 py-6">
                    © All rights reserved
                </div>
            </div>
        </section>
    );
};

export default Footer;