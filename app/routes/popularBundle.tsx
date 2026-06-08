import React from 'react';
import { BundleCard } from './bundleCard.tsx';

const bundleProducts = [
    { id: 1, title: "Top + Bottom + Scarf", price: 2750, originalPrice: 3200, imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=400", link: "/bundle/1" },
    { id: 2, title: "Top + Bottom + Scarf", price: 2750, originalPrice: 3200, imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=400", link: "/bundle/2" },
    { id: 3, title: "Top + Bottom + Scarf", price: 2750, originalPrice: 3200, imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=400", link: "/bundle/3" },
    { id: 4, title: "Top + Bottom + Scarf", price: 2750, originalPrice: 3200, imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=400", link: "/bundle/4" },
];

export const PopularBundles: React.FC = () => {
    return (
        <section className="py-12">
            <div className="w-[90%] mx-auto px-4 md:px-8">
                
                {/* Header and See All Button */}
                <div className="text-center space-y-3 mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Popular Bundles</h2>
                    <p className="text-xs md:text-sm text-gray-500">Save more with our best-selling style combos.</p>
                    <div className="pt-2">
                        <button className="border border-gray-400 text-gray-900 text-xs font-medium px-5 py-2 rounded-sm hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300">
                            See All Bundles
                        </button>
                    </div>
                </div>

                {/* Bundles Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {bundleProducts.map((bundle) => (
                        <BundleCard
                            key={bundle.id}
                            title={bundle.title}
                            price={bundle.price}
                            originalPrice={bundle.originalPrice}
                            imageUrl={bundle.imageUrl}
                            link={bundle.link}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};