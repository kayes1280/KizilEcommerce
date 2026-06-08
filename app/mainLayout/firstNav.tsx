import {
    FaPhone,
    FaMagnifyingGlass,
    FaRegUser,
    FaRegHeart,
    FaOpencart,
} from "react-icons/fa6";

const navLinks = [
    {
        icon: <FaRegUser />,
        title: "My Account",
    },
    {
        icon: <FaRegHeart />,
        title: "Wishlist",
    },
    {
        icon: <FaOpencart />,
        title: "Shopping Cart",
    },
];

export default function Navbar() {
    return (
        <>
            {/* 1st nav */}
            <div className="w-[95%] lg:w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 mt-5">
                
                <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10">
                    <h1 className="tracking-[5px] text-4xl sm:text-5xl lg:text-6xl font-bold">
                        KI<span className="text-orange-500">ZIL</span>
                    </h1>

                    <div className="flex items-center gap-3">
                        <FaPhone className="text-2xl lg:text-3xl" />
                        <div>
                            <p className="text-gray-500 text-sm lg:text-base">
                                Contact us 24/7
                            </p>
                            <h3 className="font-bold text-lg lg:text-xl">
                                (02) 55048474
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="relative w-full lg:w-auto">
                    <div className="absolute my-4 ml-4">
                        <FaMagnifyingGlass className="h-5 w-5 text-[#FF4500] stroke-[2.5]" />
                    </div>

                    <input
                        type="text"
                        placeholder="Search for Products"
                        className="w-full lg:w-[400px] bg-[#F3F3F3] text-[#757575] placeholder-[#757575] text-lg rounded-full py-3 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                    />
                </div>

                <div className="flex flex-wrap justify-center lg:justify-end items-center gap-5 lg:gap-15">
                    {navLinks.map((link, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            {link.icon}
                            <a href="#" className="font-medium hover:text-orange-500">
                                {link.title}
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}