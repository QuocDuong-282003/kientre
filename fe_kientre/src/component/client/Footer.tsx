"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-[#ecf1f6] pt-12 pb-8 border-t border-gray-200 text-[#334155]">
            <div className="w-full px-4 sm:px-6 lg:px-[2cm]">

                {/*  logo */}
                <div className="flex flex-col md:flex-row items-start md:items-center pb-8">
                    <div className="mb-6 md:mb-0 md:mr-10">
                        <img src="/logo/Logo.png" alt="Kiến Trẻ Logo" className="h-16 w-auto" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-[#1e293b]">HỆ THỐNG PHÁT TRIỂN NĂNG LỰC TƯ DUY TOÀN DIỆN CHO TRẺ</h3>
                        <p className="text-sm italic mb-3 text-gray-600">Đam mê là khởi nguồn của trí tuệ</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                (+84) 866482788
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                contact@kientre.edu.vn
                            </div>
                            <div>MST: 0318966349</div>
                        </div>
                    </div>
                </div>

                <hr className="w-[95%] border-gray-300 mx-auto mb-8" />

                {/*  content grid */}
                <div className="flex flex-col md:flex-row justify-between w-full gap-8">

                    {/*  chi nhánh*/}
                    <div className="w-full md:w-[40%] pl-4 md:pl-8 lg:pl-8">
                        <h4 className="font-bold mb-4 uppercase text-[#1e293b]">HỆ THỐNG KIẾN TRẺ</h4>

                        <div className="mb-4">
                            <h5 className="font-semibold mb-2">Trụ sở chính</h5>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <div>
                                    <div className="font-medium text-[#1e293b]">Kiến Trẻ Bình Thạnh</div>
                                    <div className="text-sm text-gray-600">36/72 Nguyễn Gia Trí, Phường Thạnh Mỹ Tây, TP. HCM</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h5 className="font-semibold mb-3">Các chi nhánh</h5>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                    <div>
                                        <div className="font-medium text-[#1e293b]">Kiến Trẻ Tân Bình</div>
                                        <div className="text-sm text-gray-600">86/40 Phổ Quang, Phường Tân Sơn Hòa, TP. HCM</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                    <div>
                                        <div className="font-medium text-[#1e293b]">Kiến Trẻ Thủ Đức</div>
                                        <div className="text-sm text-gray-600">86 Ngô Quyền, Phường Tăng Nhơn Phú, TP. Thủ Đức</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                    <div>
                                        <div className="font-medium text-[#1e293b]">Kiến Trẻ Quận 10</div>
                                        <div className="text-sm text-gray-600">436/10 Đường 3/2, Phường Hòa Hưng, TP. HCM</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                    <div>
                                        <div className="font-medium text-[#1e293b]">Kiến Trẻ Tân Phú</div>
                                        <div className="text-sm text-gray-600">29 Ý Lan, Phường Phú Thạnh, TP. HCM</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                    <div>
                                        <div className="font-medium text-[#1e293b]">Kiến Trẻ Quận 7</div>
                                        <div className="text-sm text-gray-600">16 Đường Số 36, Phường Tân Hưng, TP. HCM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  link */}
                    <div className="w-full md:w-[35%] lg:w-[25%] flex flex-col gap-10 px-0 md:px-10 lg:px-16">
                        <div className="flex flex-col">
                            <h4 className="font-bold mb-4 uppercase text-[#1e293b]">VỀ KIẾN TRẺ</h4>
                            <ul className="space-y-2 text-sm text-gray-600 font-medium">
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Gặp gỡ các Kiến Trẻ</Link></li>
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Vũ trụ Kiến Trẻ</Link></li>
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Tuyển dụng</Link></li>
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Books</Link></li>
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Liên hệ tư vấn</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-bold mb-4 uppercase text-[#1e293b]">CHƯƠNG TRÌNH HỌC</h4>
                            <ul className="space-y-2 text-sm text-gray-600 font-medium">
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Ôn luyện thi chuyên</Link></li>
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Chương trình theo năng lực</Link></li>
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Hệ thống ôn thi Vtest</Link></li>
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Books</Link></li>
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Hướng nghiệp</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/*  policies & back to top */}
                    <div className="w-full md:w-[15%] flex flex-col items-start md:items-start">
                        <h4 className="font-bold mb-4 uppercase text-[#1e293b]">CHÍNH SÁCH</h4>
                        <ul className="space-y-2 text-sm text-gray-600 font-medium mb-12">
                            <li><Link href="/" className="hover:text-blue-600 transition-colors">Điều khoản sử dụng</Link></li>
                            <li><Link href="/" className="hover:text-blue-600 transition-colors">Chính sách bảo mật</Link></li>
                            <li><Link href="/" className="hover:text-blue-600 transition-colors">Chính sách đổi trả</Link></li>
                        </ul>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-6 rounded-full flex items-center shadow-md transition-all active:scale-95"
                        >
                            <svg className="w-5 h-5 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            Lên đầu
                        </button>
                    </div>

                </div>

                {/* icons */}
                <div className="fixed bottom-10 right-6 z-[100] flex flex-col gap-4">
                    <a
                        href="https://zalo.me/0866482788"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[60px] h-[60px] rounded-[15px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center hover:scale-110 transition-all duration-300 group overflow-hidden"
                    >
                        <img src="/icon/zalo.png" alt="Zalo" className="w-full h-full object-contain" />
                    </a>
                    <a
                        href="#"
                        className="w-[60px] h-[60px] bg-[#2563eb] rounded-[15px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center hover:scale-110 transition-all duration-300"
                    >
                        <img src="/icon/Mess.png" alt="Messenger" className="w-[42px] h-[42px] object-contain" />
                    </a>
                    <a
                        href="tel:0866482788"
                        className="w-[60px] h-[60px] bg-[#2563eb] rounded-[15px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center hover:scale-110 transition-all duration-300"
                    >
                        <img src="/icon/phone-solid-full.png" alt="Phone" className="w-[32px] h-[32px] object-contain brightness-0 invert" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
