import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Truck, Clock, ShieldCheck } from 'lucide-react';

interface SlideData {
    id: number;
    bgColor: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string;
    showBtn?: boolean;
}

const slides: SlideData[] = [
    {
        id: 1,
        bgColor: 'bg-[#0e94a0]', // Teal/Turquoise Color
        title: 'Redefine Your Everyday Style',
        subtitle: 'Discover chic tops, comfy loungewear, trendy bottoms, and timeless accessories — all in one place.',
        buttonText: 'Explore Collection',
        buttonLink: '/collection',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', // Replace with your cutout image
        showBtn: true,
    },
    {
        id: 2,
        bgColor: 'bg-[#f49fb6]', // Soft Pink Color
        title: 'Redefine Your Everyday Style',
        subtitle: 'Discover chic tops, comfy loungewear, trendy bottoms, and timeless accessories — all in one place.',
        buttonText: 'Explore Collection',
        buttonLink: '/collection',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop', // Replace with your shopping girl image
        showBtn: true,
    },
    {
        id: 3,
        bgColor: 'bg-[#fddde6]', // Promo Banner Background
        title: 'FASHION BIG SALE THIS WEEKEND',
        subtitle: 'UP TO 50% OFF',
        buttonText: 'Shop Now',
        buttonLink: '/sale',
        imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=600&auto=format&fit=crop', // Replace with your pink blazer image
        showBtn: false,
    }
];

export const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(timer);
    }, []);

  return (
    <section className="w-[94%] md:w-[90%] mx-auto bg-white font-sans mt-4 md:mt-5">
        <div className="relative w-full h-[360px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl md:rounded-2xl">

            <div
                className="flex h-full transition-transform duration-2000 ease-in-out"
                style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`min-w-full h-full relative ${slide.bgColor}`}>
                        {/* Content */}
                        <div className="px-5 sm:px-8 md:px-10 h-full flex items-center relative">

                            <div className="text-white z-20 w-[68%] sm:w-[60%] md:w-1/2">
                                <h1 className="text-2xl sm:text-4xl md:text-[3.5rem] leading-tight">{slide.title}</h1>
                                <p className="mt-2 text-xs sm:text-[15px] md:text-[20px] leading-relaxed">{slide.subtitle}</p>
                                {slide.showBtn && (
                                <Link to={slide.buttonLink} className="inline-block mt-4 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-black text-white font-semibold rounded-[8px] hover:bg-gray-700 transition">
                                        {slide.buttonText}
                                    </Link>
                                )}
                            </div>

                            <div className="absolute right-0 bottom-0 w-[52%] sm:w-1/2 h-full">
                                <img
                                src={slide.imageUrl}
                                alt={slide.title}
                                className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Indicator INSIDE slide */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {slides.map((_, dotIndex) => (
                                    <button
                                        key={dotIndex}
                                        className={`h-1.5 rounded-full ${
                                        dotIndex === currentSlide
                                            ? "w-8 bg-white"
                                            : "w-3 bg-white/50"
                                        }`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>


        {/* bottom feature */}
        <div className="md:py-8 lg:py-10 mx-auto border-b border-gray-100 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 py-4 md:py-0">
                    
                {/*Shipping */}
                <div className="flex items-center space-x-3 md:justify-center px-2 sm:px-0">
                    <div className="p-3 bg-orange-50 rounded-full text-[#ff4a5a]">
                        <Truck className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Fast, Free Shipping</h4>
                        <p className="text-xs text-gray-500 mt-0.5">On order over BDT-2000</p>
                    </div>
                </div>

                {/*Next Day Delivery */}
                <div className="flex items-center space-x-3 md:justify-center px-2 sm:px-0">
                    <div className="p-3 bg-orange-50 rounded-full text-[#ff4a5a]">
                        <Clock className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Next Day Delivery</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Free - spend over BDT-20,000</p>
                    </div>
                </div>

                {/*Quality Guarantee */}
                <div className="flex items-center space-x-3 md:justify-center px-2 sm:px-0">
                    <div className="p-3 bg-orange-50 rounded-full text-[#ff4a5a]">
                        <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Quality Guarantee</h4>
                        <p className="text-xs text-gray-500 mt-0.5">We guarantee our products</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  );
};
