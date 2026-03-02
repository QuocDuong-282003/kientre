"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Bé Minh Trí",
        achievement: "Đạt HCV Olympic Toán",
        quote: "Lúc trước con làm Toán hay sai mấy chỗ nhỏ, giờ học ở Kiến Trẻ con đã cẩn thận hơn, ít bị mất điểm.",
        image: "/logo/imag56.png",
    },
    {
        id: 2,
        name: "Bé Lê Hoàng",
        achievement: "Huy chương Bạc kỳ thi HKIMO 2024",
        quote: "Thầy cô ở Kiến Trẻ giảng dễ hiểu. Mấy bài khó con làm được rồi, con thấy tự tin hơn khi làm kiểm tra ở lớp.",
        image: "/logo/imag57.png",
    },
    {
        id: 3,
        name: "Bé Bảo My",
        achievement: "Đạt Huy chương Vàng Quốc gia 2023",
        quote: "Ở Kiến Trẻ có nhiều bài luyện tập giúp con làm quen tay nên giờ làm bài thi con thấy tự tin hơn nhiều.",
        image: "/logo/image58.png",
    }
];

export default function Testimonials() {
    return (
        <section className="pt-[36px] pb-20 bg-[#f8fbff] w-full overflow-hidden">
            <div className="w-full px-4 lg:px-[2cm] mx-auto text-center">

                {/* headers */}
                <h2 className="text-3xl md:text-[42px] font-extrabold text-[#1f2937] leading-[1.3] mb-4 tracking-tight">
                    Lắng nghe câu chuyện <span className="text-[#3b82f6]"> trưởng thành </span><br />
                    <span >của các </span> <span className="text-[#3b82f6]" >"Chiến binh kiến"</span>
                </h2>
                <p className="text-black text-[18px] mb-24 md:mb-32 font-medium tracking-tight">
                    Mỗi học sinh tại Kiến Trẻ là một câu chuyện trưởng thành
                </p>

                {/* grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-28 md:gap-y-0 mb-16">
                    {testimonials.map((item) => (
                        <div key={item.id} className="relative bg-[#fdfdfd] border-2 border-b-[8px] border-[#3b82f6] rounded-[24px] px-4 lg:px-6 pt-8 pb-10 flex justify-end min-h-[200px] lg:min-h-[220px]">

                            <div className="absolute inset-0 rounded-[22px] overflow-hidden pointer-events-none z-0">
                                <div className="absolute inset-0 z-0 opacity-40"
                                    style={{
                                        backgroundImage: 'linear-gradient(transparent 95%, #93c5fd 5%), linear-gradient(90deg, transparent 38px, #fb923c 38px, #fb923c 40px, transparent 40px)',
                                        backgroundSize: '100% 32px, 100% 100%'
                                    }}
                                ></div>

                                <div className={`absolute ${item.id === 1 ? 'bottom-5' : '-bottom-10'} ${item.id === 2 ? 'left-[4px] sm:left-0' : 'left-[16px] sm:left-[12px]'} w-[160px] h-[220px] lg:w-[170px] lg:h-[230px] z-[30]`}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain object-bottom scale-[1.15]"
                                    />
                                </div>
                            </div>

                            <div className="w-[55%] lg:w-[60%] flex items-start gap-2 lg:gap-3 z-[60] text-left relative pointer-events-auto -mt-1">
                                <div className="text-[#f97316] text-[50px] lg:text-[60px] leading-[0.7] font-serif font-black shrink-0 mt-3">
                                    “
                                </div>
                                <p className="text-[14px] lg:text-[15px] font-medium text-gray-900 leading-snug lg:leading-normal pt-4">
                                    {item.quote}
                                </p>
                            </div>

                            <div className={`absolute -bottom-8 lg:-bottom-10 left-[12px] sm:left-[10px] lg:left-[15px] bg-[#1d4ed8] text-white px-5 sm:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl shadow-lg z-30 text-left min-w-[220px] lg:min-w-[260px] w-auto max-w-[95vw]`}>
                                <div className="text-[14px] lg:text-[16px] font-bold uppercase mb-0.5">{item.name}</div>
                                <div className="text-[12px] lg:text-[14px] font-medium leading-[1.3] opacity-90 whitespace-nowrap">
                                    {item.achievement}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* bottom */}
                {/* <div className="mt-20">
                    <Link href="/" className="inline-flex items-center text-[#3b82f6] hover:text-blue-700 font-bold text-[17px] group transition-colors">
                        Xem thêm hành trình học sinh <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                    </Link>
                </div> */}

                <div className="flex justify-center pb-8 mt-16 md:mt-24">
                    <div className="inline-block px-4 md:px-12 bg-transparent text-center">
                        <Link
                            href="/ve-kientre"
                            className="inline-flex items-center justify-center bg-[#F97316] hover:bg-[#EA580C] text-white text-lg md:text-[19px] font-bold py-3.5 px-8 md:px-10 rounded-full transition-colors drop-shadow-[0_8px_16px_rgba(249,115,22,0.3)] shadow-[0_4px_14px_0_rgb(234,88,12,0.39)]"
                        >
                            Hành trình "phá kén" ngoạn mục
                            <ArrowRight className="ml-2 w-6 h-6 shrink-0" strokeWidth={2.5} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

