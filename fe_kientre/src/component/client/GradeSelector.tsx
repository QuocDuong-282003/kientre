'use client';
import { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Brain, MonitorPlay, ClipboardList, ArrowRight } from 'lucide-react';

const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type Program = {
    id: number;
    icon?: React.ElementType;
    iconImg?: string;
    title: string;
};

const gradePrograms: Record<number, Program[]> = {
    1: [
        { id: 1, iconImg: '/icon/Brain.png', title: 'Phát triển năng lực tư duy Offline' },
        { id: 2, iconImg: '/icon/edit.png', title: 'Phát triển năng lực tư duy Online' },
        { id: 3, iconImg: '/icon/list.png', title: 'Tài liệu' },
    ],
    2: [
        { id: 1, iconImg: '/icon/Brain.png', title: 'Phát triển năng lực tư duy Offline' },
        { id: 2, iconImg: '/icon/edit.png', title: 'Phát triển năng lực tư duy Online' },
        { id: 3, iconImg: '/icon/list.png', title: 'Tài liệu' },
    ],
    3: [
        { id: 1, iconImg: '/icon/Brain.png', title: 'Phát triển năng lực tư duy Offline' },
        { id: 2, iconImg: '/icon/edit.png', title: 'Phát triển năng lực tư duy Online' },
        { id: 3, iconImg: '/icon/list.png', title: 'Tài liệu' },
    ],
    4: [
        { id: 1, iconImg: '/icon/Brain.png', title: 'Phát triển năng lực tư duy Offline' },
        { id: 2, iconImg: '/icon/edit.png', title: 'Phát triển năng lực tư duy Online' },
        { id: 3, iconImg: '/icon/list.png', title: 'Tài liệu' },
    ],
    5: [
        { id: 1, iconImg: '/icon/list.png', title: 'Ôn luyện thi chuyên' },
        { id: 2, iconImg: '/icon/Brain.png', title: 'Phát triển năng lực tư duy Offline' },
        { id: 3, iconImg: '/icon/edit.png', title: 'Phát triển năng lực tư duy Online' },
        { id: 4, iconImg: '/icon/list.png', title: 'Tài liệu' },
    ],
    6: [
        { id: 1, iconImg: '/icon/list.png', title: 'Ôn luyện thi chuyên' },
        { id: 2, iconImg: '/icon/Brain.png', title: 'Phát triển năng lực tư duy Offline' },
        { id: 3, iconImg: '/icon/edit.png', title: 'Phát triển năng lực tư duy Online' },
    ],
    7: [
        { id: 1, iconImg: '/icon/list.png', title: 'Ôn luyện thi chuyên' },
        { id: 2, iconImg: '/icon/Brain.png', title: 'Phát triển năng lực tư duy Offline' },
        { id: 3, iconImg: '/icon/list.png', title: 'Tài liệu' },
    ],
    8: [
        { id: 1, iconImg: '/icon/list.png', title: 'Ôn luyện thi chuyên' },
        { id: 2, iconImg: '/icon/Brain.png', title: 'Phát triển năng lực tư duy Offline' },
        { id: 3, iconImg: '/icon/list.png', title: 'Tài liệu' },
    ],
    9: [
        { id: 1, iconImg: '/icon/list.png', title: 'Ôn luyện thi chuyên' },
        { id: 2, iconImg: '/icon/Brain.png', title: 'Phát triển năng lực tư duy Offline' },
        { id: 3, iconImg: '/icon/edit.png', title: 'Phát triển năng lực tư duy Online' },
        { id: 4, iconImg: '/icon/Group.png', title: 'Hướng nghiệp' },
        { id: 5, iconImg: '/icon/list.png', title: 'Tài liệu' },
    ],
};

const gradeInfo: Record<number, { students: number; sessions: number; label: string }> = {
    1: { students: 120, sessions: 36, label: 'Lớp 1 – Tư duy nền tảng' },
    2: { students: 100, sessions: 36, label: 'Lớp 2 – Tư duy nền tảng' },
    3: { students: 110, sessions: 40, label: 'Lớp 3 – Tư duy nền tảng' },
    4: { students: 130, sessions: 40, label: 'Lớp 4 – Tư duy nâng cao' },
    5: { students: 180, sessions: 48, label: 'Lớp 5 – Ôn luyện thi chuyên' },
    6: { students: 150, sessions: 48, label: 'Lớp 6 – Tư duy & thi chuyên' },
    7: { students: 140, sessions: 48, label: 'Lớp 7 – Tư duy & thi chuyên' },
    8: { students: 130, sessions: 52, label: 'Lớp 8 – Ôn luyện thi vào 9' },
    9: { students: 200, sessions: 60, label: 'Lớp 9 – Ôn thi vào 10 chuyên' },
};

const dotBg = {
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
    backgroundSize: '36px 36px',
};

export default function GradeSelector() {
    const [activeGrade, setActiveGrade] = useState(5);
    const [activeProgram, setActiveProgram] = useState(0);
    const programs = gradePrograms[activeGrade] ?? [];
    const info = gradeInfo[activeGrade];

    const handleGradeChange = (g: number) => {
        setActiveGrade(g);
        setActiveProgram(0);
    };

    return (
        <section className="py-16 md:py-20 bg-[#f0f5ff] w-full overflow-hidden">
            <div className="w-full px-4 lg:px-[2cm] mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-[42px] font-extrabold text-[#1f2937] leading-[1.3] mb-3 tracking-tight px-2">
                        Thiết kế chương trình <span className="text-[#3b82f6]">theo mục tiêu</span><br />
                        và <span className="text-[#3b82f6]">nhịp độ riêng</span> của con
                    </h2>
                    <p className="text-black text-[17px] font-medium px-4">
                        Để Kiến Trẻ giúp con bạn tìm được lộ trình học tập phù hợp nhất với năng lực và mục tiêu
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-6">

                    {/* cột trái:  selector  lớp*/}
                    <div
                        className="w-full lg:w-[45%] bg-[#2563eb] rounded-3xl p-6 lg:p-8 shrink-0 mr-0 lg:mr-4 self-start"
                        style={dotBg}
                    >
                        <h3 className="text-white font-bold text-[18px] lg:text-[20px] text-center mb-6">Chọn lớp học</h3>
                        <div className="grid grid-cols-2 xs:grid-cols-3 gap-3 md:gap-4 max-w-[420px] mx-auto">
                            {grades.map((g) => {
                                const isActive = activeGrade === g;
                                return (
                                    <button
                                        key={g}
                                        onClick={() => handleGradeChange(g)}
                                        className={`
                                            py-3 md:py-4 px-3 rounded-[24px] md:rounded-[28px] font-semibold text-[15px] md:text-[16px] transition-all duration-200 border-2
                                            ${isActive
                                                ? 'bg-white text-[#f97316] border-white font-bold shadow-lg'
                                                : 'bg-transparent text-white border-white/40 hover:bg-white/10'
                                            }
                                        `}
                                    >
                                        Lớp {g}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* CURVED DASHED CONNECTOR */}
                    <div className="hidden lg:flex items-center justify-center shrink-0 w-20 -mx-8 z-10 self-start mt-[72px]">
                        <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto overflow-visible">
                            <circle cx="78" cy="36" r="9" fill="#60a5fa" />
                            <path
                                d="M78 52 C78 96, 2 64, 2 108"
                                stroke="#93c5fd"
                                strokeWidth="2.5"
                                strokeDasharray="7 6"
                                strokeLinecap="round"
                                fill="none"
                            />
                            <circle cx="2" cy="124" r="9" fill="#60a5fa" />
                        </svg>
                    </div>

                    {/* cột phải: chương trình */}
                    <div
                        className={`w-full lg:flex-1 bg-[#2563eb] rounded-3xl p-6 lg:p-8 ml-0 lg:ml-4 mr-[3px] ${programs.length >= 4 ? 'pb-12 lg:pb-14' : ''}`}
                        style={dotBg}
                    >
                        <h3 className="text-white font-bold text-[18px] lg:text-[20px] text-center mb-6">Chọn chương trình</h3>
                        <div className="flex flex-col gap-4">
                            {programs.map((prog, idx) => {
                                const isActive = activeProgram === idx;
                                const IconComp = prog.icon;
                                return (
                                    <button
                                        key={prog.id}
                                        onClick={() => setActiveProgram(idx)}
                                        className={`
                                            flex items-center gap-3 px-5 py-4 rounded-full text-left transition-all duration-200 w-full font-semibold text-[15px]
                                            ${isActive
                                                ? 'bg-white text-[#f97316] shadow-lg'
                                                : 'bg-[#1e40af]/70 text-white hover:bg-[#1e40af]/90'
                                            }
                                        `}
                                    >
                                        {prog.iconImg ? (
                                            <Image src={prog.iconImg} alt={prog.title} width={20} height={20} className="w-5 h-5 shrink-0 object-contain" />
                                        ) : IconComp ? (
                                            <IconComp className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#f97316]' : 'text-white'}`} />
                                        ) : null}
                                        {prog.title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Info Panel Redesign */}
                <div className="mt-12 bg-white rounded-[32px] shadow-xl shadow-blue-900/5 p-6 lg:p-10 relative overflow-hidden">
                    <div className="text-center mb-10">
                        <h4 className="text-gray-900 font-bold text-lg mb-2">Thông tin chương trình</h4>
                        <h3 className="text-2xl lg:text-[28px] font-extrabold text-[#f97316]">
                            Lớp {activeGrade} - <span className="text-[#f97316]">{programs[activeProgram]?.title}</span>
                        </h3>
                    </div>

                    {/* 3 columns of info cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 flex items-center gap-5 shadow-sm">
                            <div className="w-16 h-16 shrink-0 relative">
                                <Image src="/logo/sotiethoc.png" alt="sessions" fill className="object-contain" />
                            </div>
                            <div>
                                <div className="text-gray-500 font-medium text-sm mb-1">Số tiết học</div>
                                <div className="text-xl font-bold text-[#2563eb]">{info.sessions} bài giảng</div>
                            </div>
                        </div>

                        <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 flex items-center gap-5 shadow-sm">
                            <div className="w-16 h-16 shrink-0 relative">
                                <Image src="/logo/clock.png" alt="time" fill className="object-contain" />
                            </div>
                            <div>
                                <div className="text-gray-500 font-medium text-sm mb-1">Thời lượng lộ trình</div>
                                <div className="text-xl font-bold text-[#2563eb]">6 tháng</div>
                            </div>
                        </div>

                        <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 flex items-center gap-5 shadow-sm">
                            <div className="w-16 h-16 shrink-0 relative">
                                <Image src="/logo/battay.png" alt="outcome" fill className="object-contain" />
                            </div>
                            <div>
                                <div className="text-gray-500 font-medium text-sm mb-1">Cam kết đầu ra</div>
                                <div className="text-xl font-bold text-[#2563eb]">Tư duy vượt trội</div>
                            </div>
                        </div>
                    </div>

                    {/* Footer bar with registration info and button */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100 mt-2">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden relative bg-gray-100">
                                    <Image src="/logo/chuyenbeminhhai.jpg" alt="student" fill className="object-cover" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden relative bg-gray-100">
                                    <Image src="/logo/chuyenbengocmai.jpg" alt="student" fill className="object-cover" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden relative bg-gray-100">
                                    <Image src="/logo/chuyenbethaovy.png" alt="student" fill className="object-cover" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-50 flex items-center justify-center text-black font-bold text-sm z-10">
                                    +2k
                                </div>
                            </div>
                            <p className="text-gray-600 font-medium">Học sinh đã đăng ký chương trình này</p>
                        </div>

                        <button className="bg-[#f97316] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-lg shadow-orange-500/30 hover:bg-[#ea580c] transition-all group">
                            Xem chi tiết
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
