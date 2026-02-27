'use client';
import React from 'react';
import Image from 'next/image';

const articles = [
    {
        id: 1,
        date: '15/02/2026',
        title: 'Hội thảo định hướng thi chuyên 2026',
        desc: 'Cùng con em chuẩn bị hành trang vững chắc trước ngưỡng cửa trường chuyên với các chuyên gia hàng đầu.',
        image: '/logo/dicard1.jpg',
        link: '#',
    },
    {
        id: 2,
        date: '20/02/2026',
        title: 'Workshop Toán Olympiad cho phụ huynh',
        desc: 'Tìm hiểu về phương pháp học Toán tư duy giúp con tự tin chinh phục các kỳ thi đỉnh cao.',
        image: '/logo/dicard2.jpg',
        link: '#',
    },
    {
        id: 3,
        date: '28/02/2026',
        title: 'Ngày hội học viên Kiến Trẻ 2026',
        desc: 'Khoảnh khắc trao cờ đáng nhớ và những nụ cười rạng rỡ của học viên Kiến Trẻ trong sự kiện năm nay.',
        image: '/logo/dicard3.jpg',
        link: '#',
    },
];

export default function News() {
    return (
        <section className="pt-14 pb-20 bg-[#e0edff] w-full overflow-hidden">
            <div className="w-full px-4 lg:px-[2cm] mx-auto text-center">

                {/* header */}
                <h2 className="text-3xl md:text-[42px] font-extrabold text-[#1f2937] leading-[1.3] mb-4 tracking-tight px-2">
                    Kiến Trẻ <span className="text-[#3b82f6]">hôm nay</span>
                </h2>
                <p className="text-gray-500 text-lg md:text-[17px] mb-10 font-medium tracking-tight px-4">
                    Cập nhật hoạt động & thông tin mới nhất từ Kiến Trẻ
                </p>

                {/* card  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
                    {articles.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white mx-[1px]"
                        >
                            {/* image */}
                            <div className="relative w-full h-[220px] lg:h-[240px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* date */}
                                <div className="absolute top-3 right-3 bg-white text-[#f97316] text-[12px] font-bold px-3 py-1.5 rounded-xl shadow flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    {item.date}
                                </div>
                            </div>

                            {/* content */}
                            <div className="flex flex-col flex-1 px-4 py-3 gap-1.5">
                                <h3 className="text-[16px] lg:text-[17px] font-bold text-[#1f2937] leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] lg:text-[14px] text-gray-500 leading-relaxed flex-1">
                                    {item.desc}
                                </p>
                                <a
                                    href={item.link}
                                    className="mt-2 inline-flex items-center gap-1 text-[#3b82f6] font-semibold text-[14px] hover:gap-2 transition-all duration-200"
                                >
                                    Xem chi tiết <span className="text-[16px]">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
