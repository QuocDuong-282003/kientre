"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Roadmap() {
    const [activeCard, setActiveCard] = useState<number>(1);

    const cards = [
        {
            title: "Phát triển năng lực tư duy Offline",
            desc: "Lớp học tại Kiến Trẻ là nơi mỗi bài giảng Toán, Văn, Anh, Khoa Học đều được tinh chỉnh để phù hợp với nhịp độ học tập của từng cá nhân. Bằng việc chữa bài trực tiếp và uốn nắn tư duy giải đề ngay tại chỗ, chúng tôi giúp con lấp đầy lỗ hổng kiến thức kịp thời, xây dựng nền tảng vững chãi để tự tin chinh phục những nấc thang điểm số cao hơn.",
            icon: "/icon/Brain.png",
            btn: "Khởi tạo \"bản dệt\"",
        },
        {
            title: "Ôn thi chuyên",
            desc: "Lộ trình được thiết kế chuyên biệt để chinh phục các trường chuyên và hệ tiên tiến top đầu như Trần Đại Nghĩa, Bình Thọ, Hoa Lư... Bằng cách rèn luyện với cấu trúc đề thi được chuẩn hóa và áp lực phòng thi thực tế, Kiến Trẻ khẳng định vị thế đồng hành, giúp con tự tin nắm giữ tấm vé vào mọi trường giáo dục mơ ước.",
            icon: "/icon/Group.png",
            btn: "Khởi tạo \"bản dệt\"",
        },
        {
            title: "Phát triển năng lực tư duy Online",
            desc: "Mang lớp học chất lượng cao về \"tận nhà\" với hình thức học trực tuyến sinh động. Không chỉ dừng lại ở kiến thức phổ thông như Toán, Tiếng Anh, Khoa Học. Kiến Trẻ còn mở rộng lộ trình luyện thi các kỳ thi Toán quốc tế uy tín như IKMC, AIMO, SASMO, TIMO, giúp con tự tin vươn ra biển lớn.",
            icon: "/icon/edit.png",
            btn: "Khởi tạo \"bản dệt\"",
        },
        {
            title: "Hướng nghiệp",
            desc: "Đồng hành cùng con trong việc nhận diện thế mạnh và đam mê từ sớm. Thông qua các bài kiểm tra năng lực và tư vấn chuyên sâu, Kiến Trẻ giúp ba mẹ và học sinh xây dựng lộ trình học tập đúng đắn, làm tiền đề vững chắc cho sự nghiệp tương lai của trẻ.",
            icon: "/icon/Goal.png",
            btn: "Khởi tạo \"bản dệt\"",
        },
        {
            title: "Tài liệu",
            desc: "Sở hữu hệ thống tài liệu độc quyền được biên soạn bởi đội ngũ giáo viên giàu kinh nghiệm. Với nội dung đa dạng và bộ đề thi bám sát thực tế, đây là trợ thủ đắc lực giúp con tự học hiệu quả và bứt phá điểm số trong mọi kỳ thi.",
            icon: "/icon/list.png",
            btn: "Khởi tạo \"bản dệt\"",
        }
    ];

    return (
        <section className="relative pt-10 md:pt-12 pb-12 md:pb-35 overflow-hidden bg-slate-50 border-0 border-t-0" style={{ borderTop: 'none' }}>
            <div
                className="absolute inset-0 opacity-80 mix-blend-multiply pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#caddff 1px, transparent 1px), linear-gradient(90deg, #caddff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="w-full px-4 lg:px-[2cm] relative z-10 mx-auto">
                {/* header */}
                <div className="text-center mb-10 md:mb-20 px-4 relative">
                    {/* ảnh kéo - absolute trái */}
                    <Image
                        src="/logo/keo.png" alt="kéo" width={120} height={120}
                        className="hidden md:block object-contain w-35 h-35 absolute left-[5%] top-[40%] -translate-y-1/2 pointer-events-none rotate-[-150deg]"
                    />
                    {/* ảnh chỉ - absolute phải */}
                    <Image
                        src="/logo/chi.png" alt="chỉ" width={120} height={120}
                        className="hidden md:block object-contain w-45 h-45 absolute right-[4%] top-[35%] -translate-y-1/2 pointer-events-none"
                    />

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3">
                        <span className="text-[#3b82f6]">May</span> lộ trình - <span className="text-[#3b82f6]">Dệt</span> tương lai
                    </h2>
                    <p className="text-black text-lg sm:text-xl max-w-2xl mx-auto">
                        Lộ trình cho con vươn tới phát triển toàn diện
                    </p>

                    {/*  võng dashed — cong từ trái xuống giữa lên phải */}
                    <div className="hidden md:block w-full -mt-6 pointer-events-none opacity-60">
                        <svg viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <path d="M80,5 Q500,140 900,5" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* cards grid */}
                <div
                    className="flex flex-wrap justify-center gap-x-6 lg:gap-x-8 gap-y-6 lg:gap-y-30 w-full mx-auto items-start -mt-10"
                    onMouseLeave={() => setActiveCard(-1)}
                >
                    {cards.map((card, index) => {
                        const isActive = activeCard === index;

                        return (
                            /*luôn compact,layout  ko đổi*/
                            <div
                                key={index}
                                onMouseEnter={() => setActiveCard(index)}
                                className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)] min-h-[300px] cursor-pointer"
                            >

                                <div className={`
                                    w-full
                                    lg:absolute lg:left-0 lg:right-0
                                    rounded-[1.25rem] p-6 lg:p-7 xl:p-8 pb-[6px] lg:pb-[6px] xl:pb-[6px]
                                    transition-all duration-500 ease-in-out
                                    flex flex-col min-h-[300px]
                                    ${isActive
                                        ? 'bg-[#2563eb] shadow-[0_20px_40px_rgba(37,99,235,0.4)] z-20 border-0 lg:-top-[90px] lg:-bottom-[80px]'
                                        : 'bg-[#f8fafc] border-[2px] border-b-[6px] border-[#2563eb] hover:bg-white z-0 lg:top-0 lg:bottom-auto'
                                    }
                                `}>
                                    {isActive && (
                                        <div className="absolute inset-0 bg-[#2563eb] rounded-[1.25rem] -z-10 scale-[1.03] opacity-20 blur-xl hidden md:block"></div>
                                    )}

                                    {/* icon title */}
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

                                    <p className={`text-[15px] leading-relaxed mb-4 transition-colors duration-500 ${isActive ? 'text-white/90 line-clamp-none' : 'text-gray-600 line-clamp-3'}`}>
                                        {card.desc}
                                    </p>

                                    <div className="flex-grow" />

                                    <div className="flex justify-end w-full mb-[10px]">
                                        <button className={`
                                            flex items-center justify-center rounded-full font-bold shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out overflow-hidden
                                            ${isActive
                                                ? 'w-full bg-white text-[#2563eb] py-3.5 border-none hover:bg-gray-50'
                                                : 'w-12 h-12 bg-white border border-gray-100 text-[#3b82f6] py-0 hover:bg-gray-50 hover:text-[#2563eb]'
                                            }
                                        `}>
                                            <span className={`whitespace-nowrap transition-all duration-500 ease-in-out overflow-hidden text-[16px] ${isActive ? 'w-auto max-w-[200px] opacity-100 mr-2' : 'w-0 max-w-0 opacity-0 mr-0'}`}>
                                                {card.btn}
                                            </span>
                                            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
