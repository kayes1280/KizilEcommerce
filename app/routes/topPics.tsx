import React from 'react';
import { Link } from 'react-router';

const topPicksData = [
    { id: 1, name: 'Tops Collection', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400', link: '/category/tops' },
    { id: 2, name: 'Bottom Wear', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400', link: '/category/bottoms' },
    { id: 3, name: 'Loungewear', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400', link: '/category/loungewear' },
    { id: 4, name: 'Scarves & Wraps', imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=400', link: '/category/scarves' },
];

export const TopPicks: React.FC = () => {
    return (
        <section className="w-full bg-white py-12 border-b border-gray-50">
            <div className="w-[90%] mx-auto px-4 md:px-8">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 tracking-tight">
                    Top Pick of the Season
                </h2>

                {/* Grid Container */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {topPicksData.map((item) => (
                        <Link key={item.id} to={item.link} className="group block text-center">
                            {/* Image with smooth hover scaling */}
                            <div className="w-full aspect-square overflow-hidden bg-gray-50 rounded-sm">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                                />
                            </div>
                            <h3 className="mt-3 text-xs md:text-sm font-semibold text-gray-900 group-hover:text-neutral-600 transition-colors">
                                {item.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};