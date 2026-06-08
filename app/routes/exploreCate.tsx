import React, { useRef } from 'react';
import { Link } from 'react-router';
import {useState} from 'react';

// TypeScript Interface for Category Data
interface Category {
    id: number;
    name: string;
    imageUrl: string;
    link: string;
}

const categories: Category[] = [
    {
        id: 1,
        name: 'Tops Collection',
        imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500&auto=format&fit=crop', // Replace with actual top image
        link: '/category/tops',
    },
    {
        id: 2,
        name: 'Bottoms Wear',
        imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop', // Replace with actual bottoms image
        link: '/category/bottoms',
    },
    {
        id: 3,
        name: 'Loungewear',
        imageUrl: 'https://images.unsplash.com/photo-1562572159-4ebcd318f4dd?q=80&w=500&auto=format&fit=crop', // Replace with actual loungewear image
        link: '/category/loungewear',
    },
    {
        id: 4,
        name: 'Scarves',
        imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=500&auto=format&fit=crop', // Replace with actual scarves image
        link: '/category/scarves',
    },
    {
        id: 5,
        name: 'Accessories',
        imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=500&auto=format&fit=crop', // Replace with actual accessories image
        link: '/category/accessories',
    },
  
];

export const CategorySection: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    
    const scrollRef = useRef<HTMLDivElement>(null);
        const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
            const target = e.currentTarget;
            if (target.scrollLeft > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

    return (
        <section className="bg-white py-12 md:py-16 font-sans overflow-hidden">
            <div className={`mx-auto px-4 md:px-8 transition-all duration-700 ease-in-out}`}>
                
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Shop By Category
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mt-2">
                        Explore our curated collection and find your perfect style.
                    </p>
                </div>
                
                 <div className={` transition-all duration-400 ease-out ${isScrolled ? 'w-full max-w-full' : 'ml-15'}`}>
                    <div ref={scrollRef} onScroll={handleScroll} style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
                        className="flex flex-nowrap gap-5 overflow-x-auto pb-6 scrollbar-hide select-none cursor-grab active:cursor-grabbing snap-x snap-mandatory"
                    >
                        {categories.map((category) => (
                            <Link key={category.id} to={category.link} className="flex-none group block">
                                <div className="h-[300px] sm:h-[380px] md:h-[500px] rounded-[24px] w-[260px] sm:w-[280px] md:w-[400px] overflow-hidden bg-gray-100">
                                    <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 pointer-events-none" loading="lazy"/>
                                </div>

                                <h3 className="mt-4 text-base md:text-lg font-bold text-gray-900 tracking-wide pl-2 group-hover:text-gray-700 transition-colors duration-200">
                                    {category.name}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};