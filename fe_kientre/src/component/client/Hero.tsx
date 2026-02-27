"use client";

import Image from 'next/image';
import { ArrowRight, Sparkles, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
    const [activeImage, setActiveImage] = useState<number | null>(null);

    const collageImages = [
        { src: "/logo/chuyenbephamduy.png", alt: "Bé Phạm Duy" },
        { src: "/logo/chuyenbeminhhai.jpg", alt: "Bé Minh Hải" },
        { src: "/logo/chuyenbengocmai.jpg", alt: "Bé Ngọc Mai" },
        { src: "/logo/chuyenbethaovy.png", alt: "Bé Thảo Vy" }
    ];

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveImage((prev) => (prev === null ? null : (prev + 1) % collageImages.length));
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveImage((prev) => (prev === null ? null : (prev - 1 + collageImages.length) % collageImages.length));
    };

    return (
        <section className="relative bg-white pt-0 pb-24 lg:pt-0 lg:pb-28 overflow-hidden -mt-8">
            {/* background  */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="w-full px-4 lg:px-[2cm] relative z-10 overflow-visible">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-auto lg:h-[650px] mt-0 gap-6 lg:gap-0">

                    {/* left column text content */}
                    <div className="flex flex-col items-start w-full lg:w-[45%] z-20 xl:pr-10 shrink-0">
                        <div className="flex items-center gap-2 text-[#4b8df8] mb-4 md:mb-6 font-bold text-[10px] sm:text-[11px] tracking-widest uppercase bg-[#f0f5ff] py-1.5 px-3 rounded-full">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Hệ thống giáo dục phát triển năng lực tư duy toàn diện cho trẻ</span>
                        </div>

                        <h1 className="text-[32px] xs:text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[48px] font-bold text-[#1f2937] leading-[1.3] mb-4 md:mb-6 tracking-tight">
                            Giáo dục là <span className="text-[#3b82f6]">thấu hiểu</span><br />
                            để tài năng được <br />
                            <span className="text-[#3b82f6] text-[58px] xs:text-[65px] sm:text-[85px] lg:text-[100px] xl:text-[115px] inline-block leading-[0.9] mt-2 mb-2 font-extrabold tracking-normal">
                                nâng niu
                            </span>
                        </h1>

                        <p className="text-[16px] sm:text-[19px] text-gray-700 mb-8 md:mb-10 max-w-[420px] leading-relaxed font-medium">
                            Kiến Trẻ kiến tạo nên một vườn ươm hạnh phúc, nơi tư duy nở hoa và cảm xúc của trẻ được vỗ về
                        </p>

                        <button className="group flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-7 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold transition-all shadow-lg hover:-translate-y-1">
                            Kiểm tra năng lực miễn phí
                            <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* right column: image  */}

                    <div className="relative w-full lg:w-[55%] h-[520px] sm:h-[600px] lg:h-[90%] shrink-0 flex items-center justify-center lg:justify-end mt-4 lg:mt-0 pointer-events-auto">
                        <div className="relative w-full h-full max-w-[650px] transform scale-[0.8] xs:scale-[0.85] lg:scale-[0.8] origin-center lg:origin-right">

                            <div className="absolute top-[28%] left-[28%] z-[40] w-10 h-10 sm:w-14 sm:h-14 xl:w-16 xl:h-16">
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md transform -rotate-[15deg] animate-pulse">
                                    <path d="M50 5L61 35H95L68 55L78 85L50 65L22 85L32 55L5 35H39L50 5Z" fill="#ffc107" stroke="#ffb300" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M50 15L58 38H82L62 53L70 76L50 61L30 76L38 53L18 38H42L50 15Z" fill="#ffe082" />
                                </svg>
                            </div>

                            {/*   Phạm Duy  */}
                            <div onClick={() => setActiveImage(0)} className="group absolute top-[0%] right-[0%] w-[57%] z-10 transition-transform duration-500 hover:scale-[1.05] cursor-pointer">
                                <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm aspect-[4/3] bg-[#f0f7ff] border-2 border-transparent border-b-[6px] md:border-b-[8px] border-b-[#5b8def] transition-colors duration-300 group-hover:border-[#5b8def]">
                                    <Image
                                        src="/logo/chuyenbephamduy.png"
                                        alt="Bé Phạm Duy"
                                        fill
                                        className="object-cover scale-[1.05]"
                                    />

                                    <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 w-[90%] bg-[#5b8def]/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#5b8def] text-white text-[10px] sm:text-[14px] py-1.5 md:py-2 px-2 md:px-3 flex justify-center items-center gap-1 md:gap-2 font-bold z-10 rounded-full shadow-md">
                                        <div className="bg-white rounded-full p-0.5 shadow-sm">
                                            <Play className="w-3 md:w-3.5 h-3 md:h-3.5 fill-[#5b8def] text-[#5b8def]" />
                                        </div>
                                        <span className="truncate">Chuyện của bé Phạm Duy</span>
                                    </div>
                                </div>
                            </div>

                            {/*    Minh Hải */}
                            <div onClick={() => setActiveImage(1)} className="group absolute top-[28%] md:top-[30%] w-[50%] z-30 transition-transform duration-500 hover:scale-[1.05] cursor-pointer left-[-30px] sm:left-[-80px] lg:left-[-105px]">
                                <div className="relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] aspect-[4/3.8] bg-gray-50 border-2 border-transparent border-b-[6px] md:border-b-[8px] border-b-[#f97316] transition-colors duration-300 group-hover:border-[#f97316]">
                                    <Image
                                        src="/logo/chuyenbeminhhai.jpg"
                                        alt="Bé Minh Hải"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 w-[90%] bg-[#f97316]/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#f97316] text-white text-[9px] sm:text-[13px] py-1.5 md:py-2 px-2 md:px-3 flex items-center justify-center gap-1 md:gap-1.5 font-bold z-10 rounded-full shadow-md">
                                        <div className="bg-white rounded-full p-0.5 shadow-sm">
                                            <Play className="w-3 md:w-3.5 h-3 md:h-3.5 fill-[#f97316] text-[#f97316]" />
                                        </div>
                                        <span className="truncate tracking-tight">Chuyện của bé Minh Hải</span>
                                    </div>
                                </div>
                            </div>

                            {/*  Ngọc Mai  */}
                            <div onClick={() => setActiveImage(2)} className="group absolute bottom-[-5%] md:bottom-[-10%] right-[0%] w-[57%] h-[60%] z-50 transition-transform duration-500 hover:scale-[1.05] cursor-pointer">
                                <div className="relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-2xl h-full w-full bg-[#f9f9fa] mt-[4px] border-2 border-transparent border-b-[6px] md:border-b-[8px] border-b-[#ea580c] transition-colors duration-300 group-hover:border-[#ea580c]">
                                    <Image
                                        src="/logo/chuyenbengocmai.jpg"
                                        alt="Bé Ngọc Mai"
                                        fill
                                        className="object-cover"
                                        style={{ objectPosition: 'center 20%' }}
                                    />
                                    <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#ea580c]/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#ea580c] text-white text-[10px] sm:text-[14px] py-2 md:py-2.5 px-2 md:px-3 flex items-center justify-center gap-1.5 md:gap-2 font-bold z-10 rounded-full shadow-md">
                                        <div className="bg-white rounded-full p-0.5 shadow-sm shrink-0">
                                            <Play className="w-3 md:w-3.5 h-3 md:h-3.5 fill-[#ea580c] text-[#ea580c]" />
                                        </div>
                                        <span className="truncate tracking-wide">Chuyện của bé Ngọc Mai</span>
                                    </div>
                                </div>
                            </div>

                            {/*  Thảo Vy  */}
                            <div onClick={() => setActiveImage(3)} className="group absolute top-[80%] md:top-[85%] w-[50%] z-40 transition-transform duration-500 hover:scale-[1.05] cursor-pointer left-[-40px] sm:left-[-120px] lg:left-[-150px]">
                                <div className="relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-xl aspect-[4/3.2] bg-[#f0f7ff] mt-[4px] border-2 border-transparent border-b-[6px] md:border-b-[8px] border-b-[#5b8def] transition-colors duration-300 group-hover:border-[#5b8def]">
                                    <Image
                                        src="/logo/chuyenbethaovy.png"
                                        alt="Bé Thảo Vy"
                                        fill
                                        className="object-cover"
                                        style={{ objectPosition: 'center 30%' }}
                                    />

                                    <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 w-[90%] bg-[#5b8def]/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#5b8def] text-white text-[9px] sm:text-[13px] py-1.5 md:py-2 px-1.5 md:px-2 flex items-center justify-center gap-1 md:gap-1.5 font-bold z-10 rounded-full shadow-md">
                                        <div className="bg-white rounded-full p-0.5 shadow-sm shrink-0">
                                            <Play className="w-3 md:w-3.5 h-3 md:h-3.5 fill-[#5b8def] text-[#5b8def]" />
                                        </div>
                                        <span className="truncate tracking-tight">Chuyện của bé Thảo Vy</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* lightbox modal */}
            {activeImage !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setActiveImage(null)}>

                    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.5)] bg-white mx-auto w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] h-[65vh] sm:h-[70vh] md:h-[calc(100vh-4cm)] max-h-[900px]" onClick={(e) => e.stopPropagation()}>

                        <img
                            src={collageImages[activeImage].src}
                            alt={collageImages[activeImage].alt}
                            className="block w-full h-full object-cover"
                            style={{ objectPosition: 'center 35%' }}
                        />

                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

                        <button
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] flex items-center gap-1.5 bg-white text-[#3b82f6] px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-[14px] sm:text-[16px] hover:bg-white/90 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                            onClick={(e) => { e.stopPropagation(); setActiveImage(null); }}
                        >
                            <X className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                            Đóng
                        </button>

                        <button
                            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[110] bg-gray-500/40 hover:bg-white hover:text-[#3b82f6] backdrop-blur-md text-white p-2.5 sm:p-4 rounded-full transition-colors shadow-lg"
                            onClick={(e) => { e.stopPropagation(); handlePrev(e); }}
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                        </button>

                        {/*  llay button */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 sm:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.2)] cursor-pointer hover:scale-90 transition-transform duration-300">
                            <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-[#3b82f6] text-[#3b82f6] ml-1 sm:ml-2" />
                        </div>

                        {/* navigation < > */}
                        <button
                            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[110] bg-gray-500/40 hover:bg-white hover:text-[#3b82f6] backdrop-blur-md text-white p-2.5 sm:p-4 rounded-full transition-colors shadow-lg"
                            onClick={(e) => { e.stopPropagation(); handleNext(e); }}
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                        </button>
                    </div>

                </div>
            )}
        </section>
    );
}
