import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC = () => {
  // ডামি কাউন্টডাউন টাইম (৩ দিন)
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                clearInterval(timer);
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeBlocks = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <div className="flex items-center gap-2 font-sans">
            {timeBlocks.map((block, idx) => (
                <React.Fragment key={block.label}>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">{block.label}</span>
                        <div className="bg-neutral-950 text-white text-sm font-bold w-9 h-9 flex items-center justify-center rounded-md shadow-sm">
                            {String(block.value).padStart(2, '0')}
                        </div>
                    </div>
                    {idx < timeBlocks.length - 1 && (
                        <span className="text-neutral-950 font-bold text-lg mt-4">:</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};