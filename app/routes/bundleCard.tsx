import React from 'react';
import { Link } from 'react-router';

interface BundleCardProps {
    title: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    link: string;
}

export const BundleCard: React.FC<BundleCardProps> = ({
    title,
    price,
    originalPrice,
    imageUrl,
    link,
}) => {
    return (
        <div className="group bg-white rounded-xl p-3 transition-all duration-300 shadow-lg border border-gray-50">
            {/* Bundle Image with Hover Effect */}
            <div className="relative rounded-lg bg-gray-300 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Content Area */}
            <div className="mt-4 text-center space-y-2">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 tracking-wide">
                    {title}
                </h3>

                {/* Pricing */}
                <div className="flex items-center justify-center gap-2 font-sans">
                    <span className="text-base md:text-lg font-bold text-gray-950">৳ {price.toLocaleString()}</span>
                    {originalPrice && (
                        <span className="text-xs md:text-sm text-gray-400 line-through">৳ {originalPrice.toLocaleString()}</span>
                    )}
                </div>

                {/* Learn More Button */}
                <Link to={link} className="text-[13px] block w-full text-center bg-neutral-900 text-white text-xs font-medium py-3.5 rounded-sm hover:bg-neutral-700 transition-colors">
                    Learn More
                </Link>
            </div>
        </div>
    );
};