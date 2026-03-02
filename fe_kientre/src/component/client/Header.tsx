'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Home, BookOpen, School, FileText, User } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(prev => prev === section ? null : section);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setExpandedSection(null);
    };

    return (
        <header className="w-full bg-white z-[1000] sticky top-0 border-b border-gray-100 shadow-md shadow-black/5">
            <div className="w-full px-4 lg:px-[2cm]">
                <div className="flex justify-between items-center h-[70px] md:h-[90px]">
                    {/* mobile: hamburger bên trái | desktop: hidden */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu size={28} />
                    </button>

                    {/* logo */}
                    <div className="flex-shrink-0 flex items-center -ml-8 md:ml-0">
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

                    {/* login button */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="hidden sm:flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full text-[14px] md:text-[15px] font-bold transition-all shadow-md"
                        >
                            Đăng nhập
                            <Image src="/icon/actor.png" alt="User" width={15} height={15} className="object-contain" />
                        </Link>
                        <div className="md:hidden w-4" />
                    </div>
                </div>
            </div>

            {/* backdrop */}
            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/40 z-[998]"
                    onClick={closeMenu}
                />
            )}

            {/* mobile drawer panel — slide in from left */}
            <div className={`md:hidden fixed top-0 left-0 h-full w-[85vw] max-w-[340px] bg-white z-[999] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
                    <button
                        onClick={closeMenu}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-[#3b82f6] hover:bg-blue-200 transition-colors flex-shrink-0"
                    >
                        <X size={18} />
                    </button>
                    <Link href="/" onClick={closeMenu}>
                        <Image
                            src="/logo/Logo.png"
                            alt="Kiến Trẻ"
                            width={110}
                            height={38}
                            className="object-contain h-9 w-auto"
                        />
                    </Link>
                </div>

                {/* drawer nav items */}
                <nav className="flex-1 overflow-y-auto">
                    {/* Trang Chủ */}
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                        <Home size={18} className="text-gray-500 flex-shrink-0" />
                        <span className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">Trang Chủ</span>
                    </Link>

                    {/* Về Kiến Trẻ  */}
                    <div className="border-b border-gray-100">
                        <button
                            onClick={() => toggleSection('veKienTre')}
                            className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors"
                        >
                            <BookOpen size={18} className="text-gray-500 flex-shrink-0" />
                            <span className="flex-1 text-left text-[13px] font-bold text-gray-800 uppercase tracking-widest">Về Kiến Trẻ</span>
                            <ChevronDown
                                size={18}
                                className={`text-gray-400 transition-transform duration-200 ${expandedSection === 'veKienTre' ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {expandedSection === 'veKienTre' && (
                            <div className="bg-gray-50 pb-1">
                                {["Gặp gỡ các Kiến Trẻ", "Vũ trụ Kiến Trẻ", "Tuyển dụng", "Liên hệ tư vấn"].map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        onClick={closeMenu}
                                        className="block px-5 py-3 pl-11 text-[14px] text-gray-600 hover:text-[#3b82f6] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Chương Trình Học  */}
                    <div className="border-b border-gray-100">
                        <button
                            onClick={() => toggleSection('chuongTrinh')}
                            className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors"
                        >
                            <School size={18} className="text-gray-500 flex-shrink-0" />
                            <span className="flex-1 text-left text-[13px] font-bold text-gray-800 uppercase tracking-widest">Chương Trình Học</span>
                            <ChevronDown
                                size={18}
                                className={`text-gray-400 transition-transform duration-200 ${expandedSection === 'chuongTrinh' ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {expandedSection === 'chuongTrinh' && (
                            <div className="bg-gray-50 pb-1">
                                {["Ôn luyện thi chuyên", "Phát triển năng lực tư duy Offline", "Phát triển năng lực tư duy Online", "Books", "Hướng nghiệp"].map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        onClick={closeMenu}
                                        className="block px-5 py-3 pl-11 text-[14px] text-gray-600 hover:text-[#3b82f6] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Hệ Thống Ôn Thi VTest */}
                    <Link
                        href="/vtest"
                        onClick={closeMenu}
                        className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                        <FileText size={18} className="text-gray-500 flex-shrink-0" />
                        <span className="text-[13px] font-bold text-gray-800 uppercase tracking-widest">Hệ Thống Ôn Thi Vtest</span>
                    </Link>
                </nav>

                {/* footer: login button */}
                <div className="p-5 border-t border-gray-100">
                    <Link
                        href="/login"
                        onClick={closeMenu}
                        className="flex items-center justify-center gap-2 w-full bg-[#f97316] hover:bg-[#ea580c] text-white py-3.5 rounded-full text-[15px] font-bold transition-all shadow-md"
                    >
                        Đăng nhập
                        <User size={18} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
