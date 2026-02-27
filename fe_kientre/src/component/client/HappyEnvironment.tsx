import React from 'react';

export default function HappyEnvironment() {
    return (
        <section className="w-full bg-[#e0edff] pt-8 md:pt-0 pb-0 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-4 lg:pr-[2cm] relative z-10 flex flex-col md:flex-row items-center justify-between">

                {/*  text */}
                <div className="w-full md:w-[45%] mb-8 md:mb-0 relative z-20 mt-8 md:mt-0 md:-ml-6 lg:-ml-12 text-center md:text-left">
                    <h2 className="text-4xl md:text-[54px] font-extrabold leading-[1.15] mb-5 tracking-tight text-[#1e293b]">
                        Một trường học<br />
                        <span className="text-[#3b82f6]">hạnh phúc</span><br />
                        là nơi con được<br />
                        <span className="text-[#3b82f6]">là chính mình</span>
                    </h2>
                    <p className="text-black text-lg md:text-[18px] max-w-[350px] mx-auto md:mx-0 leading-relaxed font-medium">
                        Giáo dục bắt đầu từ sự thấu hiểu và tôn trọng sự khác biệt
                    </p>
                </div>

                {/* images */}
                <div className="w-full md:w-[55%] relative flex justify-center items-center h-[400px] md:h-[550px]">

                    {/*  background */}
                    <div className="absolute top-[45%] md:top-[45%] w-[100%] md:w-[120%] h-[95%] bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] rotate-[20deg] z-0 flex flex-col justify-between overflow-hidden"
                        style={{
                            WebkitMaskImage: `linear-gradient(to bottom, transparent 12px, black 12px), radial-gradient(circle at 25px 0px, transparent 12px, black 13px)`,
                            WebkitMaskSize: `100% 100%, 50px 100%`,
                            WebkitMaskRepeat: `no-repeat, repeat-x`,
                            WebkitMaskPosition: `center, top left`,
                            WebkitMaskComposite: `source-over`,

                            maskImage: `linear-gradient(to bottom, transparent 12px, black 12px), radial-gradient(circle at 25px 0px, transparent 12px, black 13px)`,
                            maskSize: `100% 100%, 50px 100%`,
                            maskRepeat: `no-repeat, repeat-x`,
                            maskPosition: `center, top left`,
                            maskComposite: `add`
                        }}
                    >
                        {/* notebook  */}
                        <div className="w-full h-full flex flex-col pt-16 px-10 gap-10 opacity-100 z-0">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-full border-b-[2px] md:border-b-[3px] border-[#fbb34e] opacity-80 pointer-events-none"></div>
                            ))}
                        </div>



                    </div>

                    {/*  paperclip */}
                    <div className="absolute top-[28%] md:top-[20%] left-[10%] md:left-[14%] -rotate-[-32deg] z-20 drop-shadow-md pointer-events-none">
                        <svg width="45" height="90" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[60px] md:h-[120px]">
                            <path d="M40 25 C 40 10, 10 10, 10 35 V 75 C 10 90, 40 90, 40 75 V 45 C 40 35, 25 35, 25 45 V 65" stroke="#2e4a8a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="absolute -bottom-10 md:-bottom-16 z-10 w-full h-[120%] md:h-[140%] flex justify-center items-end pointer-events-none text-center">
                        <img
                            src="/logo/bg_remove.png"
                            alt="Happy student"
                            className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] ml-0 md:ml-12 saturate-110"
                        />
                    </div>

                    {/*  book */}
                    <div className="absolute bottom-[-2%] left-[-18%] md:left-[-18%] z-20 w-54 h-54 md:w-82 md:h-82">
                        <img
                            src="/logo/book.png"
                            alt="Book"
                            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] -rotate-[-5deg] contrast-125 saturate-150 brightness-95"
                        />
                        <svg className="absolute -top-2 left-6 w-5 h-5 text-yellow-500 rotate-12" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>

                    {/* rocket */}
                    <div className="absolute bottom-[-1%] right-[-10%] md:right-[-25%] z-20 w-64 h-64 md:w-96 md:h-96">
                        <img
                            src="/logo/tenlua.png"
                            alt="Rocket"
                            className="w-full h-full object-contain drop-shadow-lg rotate-10"
                        />
                        <svg className="absolute -bottom-2 -left-4 w-5 h-5 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>

                    <svg className="absolute top-[5%] right-[10%] w-6 h-6 text-yellow-400 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                </div>
            </div>
        </section>
    );
}
