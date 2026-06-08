import React from 'react';
import { ProductCard } from './productCard.tsx';
import { CountdownTimer } from './timer.tsx';

const flashProducts = [
    { id: 1, name: "Buttons Cotton Top", price: 1090, originalPrice: 2000, colors: ["#d2b48c", "#556b2f"], stockLeft: 100, imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400" },
    { id: 2, name: "Wool Midi Coat", price: 1590, originalPrice: 2300, colors: ["#8b7355", "#4b5320"], stockLeft: 9, imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400" },
    { id: 3, name: "Lyocell Wrap Top", price: 4090, originalPrice: 5000, colors: ["#6b8e23", "#d7ccc8"], stockLeft: 30, imageUrl: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=400" },
    { id: 4, name: "Leather Shopper Bag With Stitching", price: 7090, originalPrice: 10000, colors: ["#d7ccc8", "#9c27b0"], stockLeft: 10, imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400" }
];

export const FlashDeals: React.FC = () => {
    return (
        <section>
            <div className="w-[90%] mx-auto px-4 md:px-8">
                {/* Header Content */}
                <div className="flex sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-5 mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Flash Deals</h2>
                    <div className="flex items-center gap-6">
                        <CountdownTimer />
                        <button className="text-xs font-semibold text-gray-900 underline hover:text-gray-600 ">
                            See All Products
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {flashProducts.map((product, idx) => (
                        <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        colors={product.colors}
                        stockLeft={product.stockLeft}
                        imageUrl={product.imageUrl}
                        hasShadowHover={true}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};