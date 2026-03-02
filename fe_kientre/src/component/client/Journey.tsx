'use client';
import React, { useState } from 'react';

const journeySteps = [
    {
        id: '01',
        title: 'Gieo mầm',
        subtitle: 'tư duy',
        desc: 'Đây là giai đoạn đặt nền móng, nơi Kiến Trẻ giúp con nhận diện thế mạnh và khơi dậy sự chủ động với tri thức. Chúng tôi tập trung xây dựng thói quen tư duy "độc lập" và sự "tự tin" ngay từ những bài học đầu tiên, chuẩn bị cho con một tâm thế vững vàng để con sẵn sàng bứt phá trong lộ trình phía trước.',
        img: '/tree/tree1.png',
        position: 'top-left'
    },
    {
        id: '02',
        title: 'Bản lĩnh',
        subtitle: 'vươn mình',
        desc: 'Khi hạt giống "tư duy" đã bén rễ, con bắt đầu chuyển mình mạnh mẽ để thoát khỏi vùng an toàn. Giai đoạn này tập trung vào việc hình thành các thói quen học tập chủ động và củng cố kỹ năng, giúp tư duy của con trở nên rõ nét và vững chãi hơn.',
        img: '/tree/mầm.png',
        position: 'top-right'
    },
    {
        id: '03',
        title: '"Gặt hái"',
        subtitle: 'vị thế dâu',
        desc: 'Dưới sự dẫn dắt sát sao, con vươn cao tới những kiến thức chuyên môn và kỹ năng giải quyết vấn đề sắc bén. Đây là thời điểm con khẳng định nội lực, không ngừng mở rộng tầm nhìn và sẵn sàng đối diện với những thử thách học thuật hay các kỳ thi quan trọng.',
        img: '/tree/tree3.png',
        position: 'bottom-left'
    },
    {
        id: '04',
        title: 'Khẳng định',
        subtitle: 'tầm vóc',
        desc: 'Quá trình rèn luyện đơm hoa kết trái bằng những kết quả xứng đáng. Con tự tin chinh phục tấm vé trường chuyên hay các giải thưởng quốc tế, tạo dựng nền tảng vững vàng để tự tin bước ra thế giới với tâm thế của "người dẫn đầu".',
        img: '/tree/ketqua.png',
        position: 'bottom-right'
    }
];

export default function Journey() {
    const [activeStep, setActiveStep] = useState(0);

    const getPosClasses = (pos: string) => {
        switch (pos) {
            case 'top-left': return "md:absolute md:top-[13%] md:left-13 lg:left-13";
            case 'top-right': return "md:absolute md:top-[13%] md:right-3 lg:right-3";
            case 'bottom-left': return "md:absolute md:bottom-[0%] md:left-13 lg:left-13";
            case 'bottom-right': return "md:absolute md:bottom-[0%] md:right-3 lg:right-3";
            default: return "";
        }
    };

    return (
        <section className="py-10 bg-[#f8fafc] w-full overflow-hidden relative">
            <div className="w-full px-4 lg:px-[2cm] mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 px-4 relative z-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2563eb] tracking-tight">
                        Khơi mở bản sắc -<span className="text-gray-900"> Con vươn mình</span> <span className='text-[#2563eb] '>đón nắng</span>

                    </h2>
                    <p className="text-black font-medium text-lg sm:text-xl max-w-2xl mx-auto mb-4">
                        Từ những hạt giống tư duy đầu tiên, Kiến Trẻ đồng hành cùng con dệt nên hành trình lớn khôn đầy "bản lĩnh"
                        vững chắc
                    </p>
                </div>

                <div className="relative w-full mx-auto min-h-[500px] md:h-[520px] flex flex-col md:block items-center justify-center gap-14 mt-6 md:mt-0">

                    {/* background  sun */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[760px] md:h-[760px] bg-slate-100 rounded-full z-0 pointer-events-none hidden md:block"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[580px] md:h-[580px] bg-[#fbfaf6] rounded-full z-0 pointer-events-none hidden md:block"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[420px] md:h-[420px] bg-[#fdf7e7] rounded-full z-0 pointer-events-none hidden md:block"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[200px] h-[200px] md:w-[360px] md:h-[360px] pointer-events-none">
                        <img
                            src={
                                activeStep === 0 ? "/tree/image163.png" :
                                    activeStep === 1 ? "/tree/image164.png" :
                                        activeStep === 2 ? "/tree/image165.png" :
                                            "/tree/image167.png"
                            }
                            alt="Sun Status"
                            className="w-full h-full object-contain transition-all duration-500"
                        />
                    </div>

                    {journeySteps.map((step, index) => {
                        const isActive = activeStep === index;

                        return (
                            <div
                                key={step.id}
                                className={`w-full max-w-[350px] md:max-w-none md:w-auto z-20 cursor-pointer transition-all duration-500 hover:-translate-y-1 ${getPosClasses(step.position)}`}
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                <div className={`
                                    relative bg-white rounded-2xl flex items-center shadow-sm 
                                    transition-all duration-500 border-[2px] border-[#3b82f6]
                                    ${isActive
                                        ? 'w-[88vw] md:w-[410px] flex-col items-start gap-2 px-4 py-5 pl-[110px] md:pl-[80px]'
                                        : 'py-3.5 pr-6 pl-[105px] md:pl-[80px] w-[83vw] md:w-[360px] lg:w-[380px] flex-row items-center min-h-[96px]'}
                                `}>

                                    <div className="absolute -top-[15px] -right-[15px] md:-top-[20px] md:-right-[20px] w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-[3px] border-[#3b82f6] flex items-center justify-center text-[#2563eb] font-extrabold text-[14px] md:text-[16px] shadow-sm z-30">
                                        {step.id}
                                    </div>

                                    <div className={`flex w-full content-center ${isActive ? 'flex-col' : 'flex-col items-start justify-center'} relative h-full`}>

                                        <div className={`
                                            absolute z-30 flex items-end justify-center transition-all duration-500
                                            ${isActive
                                                ? '-left-[130px] md:-left-[120px] -top-10 md:-top-[40px] w-32 h-32 md:w-[124px] md:h-[124px]'
                                                : '-left-[125px] md:-left-[120px] top-1/2 -translate-y-1/2 w-28 h-28 md:w-[108px] md:h-[108px]'}
                                        `}>
                                            <div className="absolute inset-0 rounded-full border-[3px] border-[#3b82f6] shadow-sm bg-white overflow-hidden pointer-events-none z-0">
                                                <div className="absolute inset-[5px] rounded-full bg-[#3b82f6]"></div>
                                            </div>

                                            <img
                                                src={step.img}
                                                alt={step.title}
                                                className={`relative z-10 max-w-none object-contain object-bottom 
                                                    ${index === 0 ? 'w-[140%] md:w-[180%] h-[140%] md:h-[180%] -mb-[15px] md:-mb-[26px]' : 'w-[110%] h-[110%] -mb-[10px]'}
                                                `}
                                            />
                                        </div>

                                        {/* text */}
                                        <div className={`
                                            flex flex-col transition-all duration-500 z-10 w-full relative pl-2 md:pl-[20px]
                                            ${isActive ? 'min-h-[50px] justify-center mt-2 md:mt-[15px]' : ''}
                                        `}>
                                            <span className={`text-[#0f172a] font-extrabold leading-tight tracking-tight ${isActive ? 'text-xl md:text-[24px]' : 'text-lg md:text-[20px]'}`}>{step.title}</span>
                                            <span className={`text-[#3b82f6] font-extrabold leading-tight tracking-tight ${isActive ? 'text-xl md:text-[24px] mt-1' : 'text-lg md:text-[20px] mt-1'}`}>{step.subtitle}</span>
                                        </div>

                                        <div className={`
                                            overflow-hidden transition-all duration-500 text-[#0f172a] font-semibold text-[14px] md:text-[15px] leading-relaxed w-full
                                            ${isActive ? 'max-h-[220px] opacity-100 mt-3 -ml-8' : 'max-h-0 opacity-0 mt-0'}
                                        `}>
                                            {step.desc}
                                        </div>

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
