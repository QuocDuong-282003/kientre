"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Roadmap() {
    const [activeCard, setActiveCard] = useState<number>(1); // Index 1 is the 2nd card (Ôn thi chuyên)

    const cards = [
        {
            title: "Phát triển năng lực tư duy Offline",
            desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
            icon: "/icon/Brain.png",
        },
        {
            title: "Ôn thi chuyên",
            desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
            icon: "/icon/Group.png",
        },
        {
            title: "Phát triển năng lực tư duy Online",
            desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
            icon: "/icon/edit.png",
        },
        {
            title: "Hướng nghiệp",
            desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
            icon: "/icon/Goal.png",
        },
        {
            title: "Tài liệu",
            desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
            icon: "/icon/list.png",
        }
    ];

    return (
        <section className="relative py-12 md:py-20 overflow-hidden bg-slate-50">
            <div
                className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="w-full px-4 lg:px-[2cm] relative z-10 mx-auto">
                {/* header */}
                <div className="text-center mb-10 md:mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
                        <span className="text-[#3b82f6]">May</span> lộ trình - <span className="text-[#3b82f6]">Dệt</span> tương lai
                    </h2>
                    <p className="text-black text-lg sm:text-xl max-w-2xl mx-auto">
                        Lộ trình cho con vươn tới phát triển toàn diện
                    </p>
                    {/* SVG  */}
                    <div className="hidden md:block absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-30 pointer-events-none -z-10">
                        <svg viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,50 Q250,100 500,50 T1000,50" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8 8" />
                        </svg>
                    </div>
                </div>

                {/* cards grid */}
                <div
                    className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full mx-auto"
                    onMouseLeave={() => setActiveCard(1)}
                >
                    {cards.map((card, index) => {
                        const isActive = activeCard === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveCard(index)}
                                className={`
                                    relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)]
                                    rounded-[1.25rem] p-6 lg:p-7 xl:p-8 cursor-pointer
                                    transition-all duration-500 ease-in-out
                                    flex flex-col h-full min-h-[300px]
                                    ${isActive
                                        ? 'bg-[#2563eb] shadow-[0_20px_40px_rgba(37,99,235,0.4)] scale-100 -translate-y-2 md:-translate-y-4 z-10 border-0'
                                        : 'bg-[#f8fafc] border-[2px] border-b-[6px] border-[#2563eb] hover:bg-white scale-100 translate-y-0 z-0'
                                    }
                                `}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-[#2563eb] rounded-[1.25rem] -z-10 scale-[1.03] opacity-20 blur-xl hidden md:block"></div>
                                )}

                                {/* icon title  */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`
                                        flex-shrink-0 flex items-center justify-center rounded-full w-14 h-14 transition-colors duration-500
                                        ${isActive ? 'bg-white shadow-md' : 'bg-[#eff6ff]'}
                                    `}>
                                        <Image
                                            src={card.icon}
                                            alt={card.title}
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                    </div>


                                    <h3 className={`text-[18px] sm:text-[20px] font-bold leading-tight mt-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-[#2563eb]'}`}>
                                        {card.title}
                                    </h3>
                                </div>

                                <p className={`text-[15px] leading-relaxed mb-8 flex-grow transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                                    {card.desc}
                                </p>

                                <div className="flex justify-end mt-auto w-full">
                                    <button className={`
                                        flex items-center justify-center rounded-full font-bold shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out overflow-hidden
                                        ${isActive
                                            ? 'w-full bg-white text-[#2563eb] py-3.5 border-none hover:bg-gray-50'
                                            : 'w-12 h-12 bg-white border border-gray-100 text-[#3b82f6] py-0 hover:bg-gray-50 hover:text-[#2563eb]'
                                        }
                                    `}>
                                        <span className={`whitespace-nowrap transition-all duration-500 ease-in-out overflow-hidden text-[16px] ${isActive ? 'w-auto max-w-[200px] opacity-100 mr-2' : 'w-0 max-w-0 opacity-0 mr-0'}`}>
                                            Tìm hiểu ngay
                                        </span>
                                        <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
