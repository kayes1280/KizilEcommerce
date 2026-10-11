
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt2 } from 'react-icons/hi';
import { FiChevronRight } from 'react-icons/fi';
import { LuZap, LuBriefcase, LuMapPin } from 'react-icons/lu';

export default function Navbar(){
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [subMenuTop, setSubMenuTop] = useState(0);

    const dropdownRef = useRef(null);

    const categories = [
        { name: 'Tops Collection', subcategories: ['T-Shirts & Tees', 'Shirts & Blouses', 'Tank Tops & Camis', 'Sweaters & Cardigans', 'Crop Tops', 'Tunics', 'Hoodies & Sweatshirts'] },
        { name: 'Bottoms Wear', subcategories: ['Jeans & Denim', 'Trousers & Pants', 'Leggings & Jeggings', 'Skirts', 'Shorts', 'Palazzo & Culottes', 'Joggers & Lounge Pants'] },
        { name: 'Loungewear', subcategories: ['Pyjamas & Nightwear', 'Tracksuits & Sweat Sets', 'Robe & House Dresses', 'Lounge Shorts & Pants', 'Sleep Shirts & Night Gowns'] },
        { name: 'Scarves & Wraps', subcategories: ['Silk Scarves', 'Cotton Scarves', 'Wool & Knit Scarves', 'Shawls & Stoles', 'Infinity Scarves'] },
        { name: 'Accessories', subcategories: ['Bags & Purses', 'Belts', 'Hats & Caps', 'Sunglasses', 'Jewelry'] }
    ];

    const handleCategoryClick = (e, categoryName) => {
        e.stopPropagation();
        if (activeCategory === categoryName) {
            setActiveCategory(null);
        } else {
            const clickedItem = e.currentTarget;
            const parentTop = clickedItem.parentElement.getBoundingClientRect().top;
            const itemTop = clickedItem.getBoundingClientRect().top;
            const relativeTop = itemTop - parentTop;
            
            setSubMenuTop(relativeTop);
            setActiveCategory(categoryName);
        }
    };

    const handleMainToggle = (e) => {
        e.stopPropagation();
        if (isCategoryOpen) {
            setIsCategoryOpen(false);
            setActiveCategory(null);
        } else {
            setIsCategoryOpen(true);
        }
    };

    //   category off on click outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            if (activeCategory) {
                setActiveCategory(null);
            } else if (isCategoryOpen) {
                setIsCategoryOpen(false);
            }
        }
        };

        document.body.addEventListener('click', handleOutsideClick);
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, [isCategoryOpen, activeCategory]);


    return (
        <>

            {/* 2nd nav */}
            <div className="w-[90%] mx-auto flex flex-wrap items-center justify-between gap-3 mt-4 lg:mt-5 relative mb-4 lg:mb-5">
          
                {/* LEFT CONTAINER */}
                <div className="w-full lg:w-auto flex flex-wrap items-center gap-x-4 gap-y-3 lg:gap-8">
                    
                    {/* Dropdown Container */}
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={handleMainToggle}
                            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 rounded-md font-semibold tracking-wide text-[10px] sm:text-xs uppercase transition-all duration-200 ${
                            isCategoryOpen 
                                ? 'bg-[#1A1A1A] text-white ring-2 ring-gray-400 opacity-100'
                                : 'bg-[#2D2D2D] text-white hover:bg-black'
                            }`}
                        >
                            <HiMenuAlt2 className="w-4 h-4 stroke-1" />
                            SHOP BY CATEGORY
                        </button>

                        {/* category with animation */}
                        {isCategoryOpen && (
                            <div className="absolute left-0 top-[calc(100%+6px)] flex z-50 max-w-[90vw] shadow-xl rounded-xl border border-gray-100 bg-white animate-slow-dropdown">
                            
                                {/* category list */}
                                <ul className="w-56 sm:w-64 max-h-[70vh] overflow-y-auto py-2 bg-white flex flex-col justify-start relative min-h-[280px]">
                                    {categories.map((cat) => {
                                        const isActive = activeCategory === cat.name;
                                        return (
                                            <li 
                                            key={cat.name}
                                            onClick={(e) => handleCategoryClick(e, cat.name)}
                                            className={`flex items-center justify-between px-6 py-3.5 cursor-pointer text-sm font-medium transition-all duration-150 ${
                                                isActive 
                                                ? 'text-[#FF4500] bg-gray-50' 
                                                : activeCategory === null 
                                                    ? 'text-[#333333] hover:bg-gray-50'
                                                    : 'text-[#333333]'
                                            }`}
                                            >
                                                <span>{cat.name}</span>
                                                <FiChevronRight className={`w-4 h-4 ${isActive ? 'text-[#FF4500]' : 'text-gray-400'}`} />
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/*subcategory with perfectly aligned main category */}
                                {activeCategory && (
                                    <div 
                                        className="absolute left-0 top-full sm:left-full sm:top-0 bg-white shadow-xl border border-gray-100 rounded-xl py-2 max-h-[60vh] overflow-y-auto min-h-[150px] w-56 sm:w-64 z-50 animate-slow-dropdown"
                                        style={{ top: `${subMenuTop}px` }} 
                                        onClick={(e) => e.stopPropagation()} 
                                    >
                                        <ul>
                                            {categories
                                            .find((cat) => cat.name === activeCategory)
                                            ?.subcategories.map((sub, idx) => (
                                                <li 
                                                key={idx}
                                                className="px-6 py-3 text-[#333333] text-sm font-medium hover:text-[#FF4500] cursor-pointer transition-colors duration-150"
                                                >
                                                    {sub}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                            </div>
                        )}
                    </div>

                    {/*next navigation  */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:gap-6 font-medium text-[#222222] text-xs sm:text-sm md:text-base">
                        <a href="#" className="hover:text-[#FF4500] transition-colors">Our Collections</a>
                        
                        <a href="#" className="flex items-center gap-1 hover:text-[#FF4500] transition-colors">
                            <LuZap className="w-4 h-4 text-[#FF4500] fill-[#FF4500]" />
                            Flash Deals
                        </a>
                        
                        <a href="#" className="hover:text-[#FF4500] transition-colors">New Arrival</a>
                        
                        <a href="#" className="text-[#FF4500] font-semibold hover:opacity-90 transition-opacity">
                            Bundle Products
                        </a>
                    </div>

                </div>

                {/* right side link */}
                <div className="w-full lg:w-auto flex flex-wrap items-center justify-between lg:justify-end gap-x-4 gap-y-2 font-medium text-[#222222] text-xs sm:text-sm">
                    <a href="#" className="flex items-center gap-1.5 hover:text-[#FF4500] transition-colors">
                        <LuBriefcase className="w-4 h-4 text-[#FF4500]" />
                        Corporate Enquiries
                    </a>
                    <a href="#" className="flex items-center gap-1.5 hover:text-[#FF4500] transition-colors">
                        <LuMapPin className="w-4 h-4 text-[#FF4500]" />
                        Track Your Order
                    </a>
                </div>

            </div>
            
        </>
    )
}
