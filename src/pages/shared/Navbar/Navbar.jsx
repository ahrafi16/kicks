import { useState } from "react";
import { Menu, Search, User, ShoppingBag, ChevronDown, X } from "lucide-react";

const navItems = [
    { name: "New Drops 🔥", path: "/" },
    { name: "Men", path: "/men", hasDropdown: true },
    { name: "Women", path: "/women", hasDropdown: true },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full flex justify-center py-4 bg-neutral-100">
            <div className="w-[95%] max-w-6xl bg-white rounded-2xl shadow-sm px-4 md:px-6 py-3 flex items-center justify-between relative">

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700">
                    {navItems.map((item) => (
                        <div key={item.name} className="flex items-center gap-1 cursor-pointer hover:text-black transition">
                            <a href={item.path}>{item.name}</a>
                            {item.hasDropdown && <ChevronDown size={16} />}
                        </div>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button onClick={() => setOpen(true)} className="md:hidden text-neutral-800">
                    <Menu size={26} />
                </button>

                {/* Logo */}
                <img className="absolute w-25 left-1/2 -translate-x-1/2" src="/logo.png" alt="logo" />

                {/* Right side */}
                <div className="flex items-center gap-4">
                    <Search className="hidden md:block cursor-pointer" size={20} />
                    <User className="cursor-pointer" size={22} />

                    <div className="relative cursor-pointer">
                        <ShoppingBag size={22} />
                        <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                            0
                        </span>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {open && (
                <div className="fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
                    <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Menu</h2>
                            <button onClick={() => setOpen(false)}>
                                <X />
                            </button>
                        </div>

                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className="text-left cursor-pointer text-lg font-medium"
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;