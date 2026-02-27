'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white z-[1000] sticky top-0 border-b border-gray-100 shadow-md shadow-black/5">
            <div className="w-full px-4 lg:px-[2cm]">
                <div className="flex justify-between items-center h-[70px] md:h-[90px]">
                    {/* logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo/Logo.png"
                                alt="Kiến Trẻ"
                                width={140}
                                height={48}
                                className="object-contain h-10 md:h-12 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* navigation desktop */}
                    <nav className="hidden md:flex space-x-12 items-center">
                        <div className="relative group cursor-pointer h-[90px] flex items-center">
                            <div className="relative flex items-center text-[13px] font-bold text-gray-700 hover:text-[#3b82f6] transition-colors uppercase tracking-widest pb-1">
                                Về Kiến Trẻ
                                <ChevronDown className="ml-1 h-3 w-3" />
                                <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#3b82f6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                            </div>

                            {/* dropdown menu 1 */}
                            <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[240px] bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 hidden group-hover:block z-[100] animate-in fade-in zoom-in duration-200">
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45"></div>
                                <ul className="flex flex-col">
                                    {["Gặp gỡ các Kiến Trẻ", "Vũ trụ Kiến Trẻ", "Tuyển dụng", "Liên hệ tư vấn"].map((item, idx) => (
                                        <li key={idx}>
                                            <Link href="#" className={`block px-5 py-3.5 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[#3b82f6] transition-colors ${idx !== 3 ? 'border-b border-gray-100' : ''}`}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="relative group cursor-pointer h-[90px] flex items-center">
                            <div className="relative flex items-center text-[13px] font-bold text-gray-700 hover:text-[#3b82f6] transition-colors uppercase tracking-widest pb-1">
                                Chương trình học
                                <ChevronDown className="ml-1 h-3 w-3" />
                                <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#3b82f6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                            </div>

                            {/* dropdown menu 2 */}
                            <div className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[300px] bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 hidden group-hover:block z-[100] animate-in fade-in zoom-in duration-200">
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45"></div>
                                <ul className="flex flex-col">
                                    {["Ôn luyện thi chuyên", "Phát triển năng lực tư duy Offline", "Phát triển năng lực tư duy Online", "Books", "Hướng nghiệp"].map((item, idx) => (
                                        <li key={idx}>
                                            <Link href="#" className={`block px-5 py-3.5 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[#3b82f6] transition-colors ${idx !== 4 ? 'border-b border-gray-100' : ''}`}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <Link href="/vtest" className="relative group text-[13px] font-bold text-gray-700 hover:text-[#3b82f6] transition-colors uppercase tracking-widest h-[90px] flex items-center">
                            <span className="relative pb-1">
                                Hệ thống ôn thi VTEST
                                <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#3b82f6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                            </span>
                        </Link>
                    </nav>

                    {/* login / mobile toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="hidden sm:flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full text-[14px] md:text-[15px] font-bold transition-all shadow-md group/login"
                        >
                            Đăng nhập
                            <Image src="/icon/actor.png" alt="User" width={15} height={15} className="object-contain" />
                        </Link>

                        <button
                            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 top-[70px] bg-white z-[999] animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col p-6 gap-6">
                        <div className="flex flex-col gap-4">
                            <p className="text-[12px] font-extrabold text-[#3b82f6] uppercase tracking-widest">Về Kiến Trẻ</p>
                            <ul className="flex flex-col gap-3 pl-2 border-l-2 border-gray-100">
                                {["Gặp gỡ các Kiến Trẻ", "Vũ trụ Kiến Trẻ", "Tuyển dụng", "Liên hệ tư vấn"].map((item, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="text-[16px] font-semibold text-gray-800" onClick={() => setIsMenuOpen(false)}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-[12px] font-extrabold text-[#3b82f6] uppercase tracking-widest">Chương trình học</p>
                            <ul className="flex flex-col gap-3 pl-2 border-l-2 border-gray-100">
                                {["Ôn luyện thi chuyên", "Phát triển năng lực tư duy Offline", "Phát triển năng lực tư duy Online", "Books", "Hướng nghiệp"].map((item, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="text-[16px] font-semibold text-gray-800" onClick={() => setIsMenuOpen(false)}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link href="/vtest" className="text-[16px] font-extrabold text-gray-900 border-t border-gray-100 pt-6" onClick={() => setIsMenuOpen(false)}>
                            Hệ thống ôn thi VTEST
                        </Link>

                        <Link
                            href="/login"
                            className="flex sm:hidden items-center justify-center gap-2 bg-[#f97316] text-white py-4 rounded-xl font-bold text-lg mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Đăng nhập
                            <Image src="/icon/actor.png" alt="User" width={20} height={20} className="object-contain" />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
