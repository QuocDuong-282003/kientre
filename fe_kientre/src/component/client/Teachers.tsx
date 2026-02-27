import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const teachers = [
    {
        id: 1,
        title: "Thầy",
        name: "CAO MINH HOÀNG",
        role: "Giáo viên toán",
        image: "/logo/imag43.png",
        archClassName: "ml-16",
        cardClassName: "-left-28",
        wrapperClassName: "lg:ml-8",
        imageClassName: "-bottom-0 -right-[90px] w-[310px] h-[350px] z-10",
    },
    {
        id: 2,
        title: "Thầy",
        name: "CAO MINH HOÀNG",
        role: "Giáo viên toán",
        image: "/logo/imag44.png",
        cardClassName: "-left-24",
    },
    {
        id: 3,
        title: "Cô",
        name: "CAO MINH HOÀNG",
        role: "Giáo viên toán",
        image: "/logo/image45.png",
        archClassName: "ml-20",
        cardClassName: "-left-28",
        imageClassName: "-bottom-0 -right-[90px] w-[310px] h-[350px] z-10",

    },
    {
        id: 4,
        title: "Thầy",
        name: "CAO MINH HOÀNG",
        role: "Giáo viên toán",
        image: "/logo/image46.png",
        cardClassName: "-left-24",
    },
    {
        id: 5,
        title: "Thầy",
        name: "CAO MINH HOÀNG",
        role: "Giáo viên toán",
        image: "/logo/image47.png",
        imageClassName: "-bottom-0 -right-[110px] w-[350px] h-[450px] z-10",
        cardClassName: "-left-24",
    },
];

export default function Teachers() {
    return (
        <section className="relative w-full pt-4 pb-16 bg-[#F8FAFF] overflow-hidden ">
            <div
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #BFE0FF 1px, transparent 1px),
            linear-gradient(to bottom, #BFE0FF 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px"
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10 space-y-8">

                <div className="max-w-4xl mx-auto  border-dotted border-blue-500 p-8 bg-transparent text-center">
                    <h2 className="text-3xl md:text-[40px] leading-tight font-extrabold mb-4 text-[#1E293B]">
                        Người thầy cô <span className="text-[#3B82F6]">đồng hành cùng con</span><br />
                        <span className="text-[#3B82F6]">trên từng bước</span> học tập
                    </h2>
                    <p className="text-lg text-gray-700 font-medium">
                        Giỏi chuyên môn và thấu hiểu tâm lý học sinh
                    </p>
                </div>

                <div className="w-full max-w-[1440px] mx-auto bg-transparent px-4 lg:px-[2cm]">

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-16 lg:gap-x-8 mb-16 mt-4">
                        {teachers.slice(0, 3).map((teacher) => (
                            <TeacherCard key={teacher.id} teacher={teacher} />
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center gap-y-16 lg:gap-x-12 xl:gap-x-44">
                        {teachers.slice(3, 5).map((teacher) => (
                            <TeacherCard key={teacher.id} teacher={teacher} />
                        ))}
                    </div>

                </div>

                <div className="flex justify-center pb-8 mt-16 md:mt-24">
                    <div className="inline-block px-4 md:px-12 bg-transparent text-center">
                        <Link
                            href="/ve-kientre"
                            className="inline-flex items-center justify-center bg-[#F97316] hover:bg-[#EA580C] text-white text-lg md:text-[19px] font-bold py-3.5 px-8 md:px-10 rounded-full transition-colors drop-shadow-[0_8px_16px_rgba(249,115,22,0.3)] shadow-[0_4px_14px_0_rgb(234,88,12,0.39)]"
                        >
                            Gặp gỡ đội ngũ <ArrowRight className="ml-2 w-6 h-6 shrink-0" strokeWidth={2.5} />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

function TeacherCard({ teacher }: { teacher: any }) {
    return (
        <div className={`flex flex-col items-center group relative pt-12 ${teacher.wrapperClassName || ""}`}>
            <div className={`relative w-[230px] h-[280px] bg-[#3B82F6] rounded-t-[115px] rounded-b-xl flex justify-center items-end ${teacher.archClassName || "md:ml-8"}`}>

                <div className={`absolute pointer-events-none ${teacher.imageClassName || "-bottom-1 -right-12 md:-right-[70px] w-64 h-72 md:w-[310px] md:h-[350px] z-10"}`}>
                    <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-contain object-bottom drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)]"
                    />
                </div>

                <div className={`absolute -bottom-8 w-auto min-w-[280px] md:w-[310px] bg-white rounded-2xl shadow-lg border-[3px] border-[#3B82F6] py-3 md:py-4 px-4 md:px-6 text-left z-20 ${teacher.cardClassName || "-left-8 md:-left-16"}`}>
                    <div className="text-[16px] md:text-[17px] xl:text-[18px] leading-tight mb-1">
                        <span className="font-semibold text-gray-700">{teacher.title}</span> <span className="font-extrabold text-[#1E293B] uppercase">{teacher.name}</span>
                    </div>
                    <div className="text-[14px] md:text-[15px] text-black font-medium">{teacher.role}</div>
                </div>
            </div>
        </div>
    );
}
