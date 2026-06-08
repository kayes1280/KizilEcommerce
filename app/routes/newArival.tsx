import React from 'react';
import { ProductCard } from './productCard.tsx';

const newProducts = [
    { id: 1, name: "Striped Linen Shirt", price: 850, originalPrice: 1500, colors: ["#caaf8b", "#ebd8bf"], imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400" },
    { id: 2, name: "Denim Blue Jeans", price: 1250, originalPrice: 2300, colors: ["#3e3b32", "#82631a"], imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400" },
    { id: 3, name: "Floral Print Dress", price: 1800, originalPrice: 3200, colors: ["#7d755d", "#ded4be"], imageUrl: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=400" },
    { id: 4, name: "Leather Ankle Boots", price: 3500, originalPrice: 5000, colors: ["#cca58d", "#9c27b0"], imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400" },
    { id: 5, name: "Silk Scarf", price: 600, originalPrice: 1200, colors: ["#cca58d", "#9c27b0"], imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400" },
    { id: 6, name: "Woolen Winter Coat", price: 4800, originalPrice: 7000, colors: ["#cca58d", "#9c27b0"], imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400" },
    { id: 7, name: "Casual Cotton T-Shirt", price: 400, originalPrice: 800, colors: ["#cca58d", "#9c27b0"], imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400" },
    { id: 8, name: "Classic Leather Belt", price: 1100, originalPrice: 2000, colors: ["#cca58d", "#9c27b0"], imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400" },
];

export const NewArrivals: React.FC = () => {
    return (
        <section className="mt-10">
            <div className="w-[90%] mx-auto px-4 md:px-8">
                {/* Header Text */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">New Arrivals</h2>
                    <p className="text-sm text-gray-500 mt-1.5">Be the first to wear the latest trends</p>
                </div>

                {/* Product Grid (8 items) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {newProducts.map((product) => (
                        <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        colors={product.colors}
                        imageUrl={product.imageUrl}
                        hasShadowHover={true}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};