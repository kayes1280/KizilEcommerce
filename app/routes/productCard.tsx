import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Share2 } from 'lucide-react';

interface ProductCardProps {
    name: string;
    imageUrl: string;
    price: number;
    originalPrice?: number;
    colors: string[];
    stockLeft?: number;
    hasShadowHover?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({name,imageUrl,price,originalPrice,colors,stockLeft,hasShadowHover = false,}) => {
    const [activeColor, setActiveColor] = useState(0);

    return (
        <div className={`group relative bg-white rounded-xl p-3 transition-all duration-300 ${
            hasShadowHover ? 'hover:shadow-lg hover:ring-1 hover:ring-black/5' : ''
        }`}>
            {/* Product Image Container */}
            <div className="relative aspect-[4/5] w-full rounded-lg bg-[#f3f3f3] overflow-hidden group">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover object-center transition-transform duration-500 "/>

                {/* Stock Left Tag */}
                {stockLeft !== undefined && (
                    <span className="absolute top-2 left-2 bg-[#ffebee] text-[#ff4a5a] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {stockLeft} Left
                    </span>
                )}

                {/* Quick Action Icons (Hover Effect) */}
                <div className="absolute top-3 right-2 flex flex-col gap-2 opacity-0 translate-x-7 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400 z-10">
                    <button className="p-2 bg-white text-gray-600 rounded-full shadow-md hover:bg-[#ff4a5a] hover:text-white transition-colors">
                        <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white text-gray-600 rounded-full shadow-md hover:bg-neutral-900 hover:text-white transition-colors">
                        <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white text-gray-600 rounded-full shadow-md hover:bg-neutral-900 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-[#ff4a5a] transition-colors">
                    {name}
                </h3>

                {/* Color Circles */}
                <div className="flex items-center gap-1.5">
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveColor(index)}
                            className={`w-4 h-4 rounded-full border transition-all ${
                                activeColor === index ? 'ring-1 ring-offset-1 ring-gray-400' : 'border-gray-200'
                            }`}
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>

                {/* Price Tag */}
                <div className="flex items-baseline gap-2 font-sans">
                    <span className="text-base font-bold text-gray-950">৳ {price.toLocaleString()}</span>
                    {originalPrice && (
                        <span className="text-xs text-gray-400 line-through">৳ {originalPrice.toLocaleString()}</span>
                    )}
                </div>

                {/* Add To Cart Button */}
                <button className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white text-xs font-medium py-2.5 rounded-md hover:bg-neutral-600 mt-2">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add To Cart
                </button>
            </div>
        </div>
    );
};