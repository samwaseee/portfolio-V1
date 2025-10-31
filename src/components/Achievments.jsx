import { Image } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AchievementDrawer = ({ title, images }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border border-gray-700 rounded-lg">
            <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-xl font-pop font-semibold">{title}</h2>
                {isOpen ?
                    <IoIosArrowUp className="w-6 h-6" /> :
                    <IoIosArrowDown className="w-6 h-6" />
                }
            </div>

            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[2400px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}>
                <div className="p-4 grid gap-4">
                    {images.map((img, index) => (
                        // If img is an object with href, wrap in <a>, otherwise render image alone
                        img?.href ? (
                            <a
                                key={index}
                                href={img.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded overflow-hidden"
                                aria-label={`${title} image ${index + 1} (opens in new tab)`}
                            >
                                <Image
                                    isBlurred
                                    width="100%"
                                    className="transform transition-transform duration-300 hover:scale-105"
                                    src={img.src}
                                    alt={img.alt ?? `${title} ${index + 1}`}
                                />
                            </a>
                        ) : (
                            <div key={index} className="block rounded overflow-hidden">
                                <Image
                                    isBlurred
                                    width="100%"
                                    className="transform transition-transform duration-300 hover:scale-105"
                                    src={typeof img === 'string' ? img : img.src}
                                    alt={typeof img === 'string' ? `${title} ${index + 1}` : img.alt ?? `${title} ${index + 1}`}
                                />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

const Achievements = () => {
    const achievements = [
        {
            title: "Competitive Programming",
            images: [
                { src: "/images/canvas.png", href: "https://www.hackerrank.com/certificates/3321f878e95d" },
                { src: "/images/Samiur Rahman Wasi.jpg" }
            ]
        },
        
        {
            title: "Web Development",
            images: [
                { src: "/images/blackbelt.png" },
                { src: "/images/certificate_page-0001.jpg" }
            ]
        },
        
        {
            title: "App Development",
            images: [{ src: "/images/EDGE_certificate.png" }]
        },
        {
            title: "AI & ML",
            images: [{ src: "/images/Gemini for Google Workspace.png", href: "https://simpli-web.app.link/e/qQ9v6AJGUXb" }]
        },
        {
            title: "Cyber Security",
            images: [{ src: "/images/cybersecurity.png", href: "https://www.linkedin.com/learning/certificates/7650954fed6d8635f3a42fb7a715b46c1979c8dbd2193010a8b9fa56b03ae7ec?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSsOfl3VeSaCiCY%2BI9DNlHQ%3D%3D" }]
        },
        {
            title: "Communication Skills",
            images: [
                { src: "/images/Screenshot 2024-06-27 010101.png", href: "https://www.linkedin.com/learning/certificates/e8c1e49ac408303ef69f50f904f58a1793fb141976747775452849b5ae2b3280?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSsOfl3VeSaCiCY%2BI9DNlHQ%3D%3D" },
                { src: "/images/10 minutes school.png", href: "https://10minuteschool.com/certificate/667d3ada155e1" }
            ]
        },
        {
            title: "Data Analysis",
            images: [
                { src: "/images/PowerBi.png", href: "https://simpli-web.app.link/e/lsa4OqB0SXb" },
                { src: "/images/Data Analytics.png", href: "https://simpli-web.app.link/e/F8Ik6l6FUXb" }
            ]
        },
        {
            title: "App Design",
            images: ["/images/Samiur Rahman Wasi.png"]
        },
        {
            title: "Idea Generation",
            images: ["/images/bl.jpg"]
        },
        {
            title: "ICISET Conference",
            images: ["/images/ieee.jpg"]
        }
    ];

    return (
        <div className='my-24 mx-auto px-4 max-w-7xl'>
            <h1 className='underline text-4xl font-pop font-bold text-center mb-10'>
                Achievements
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                    {achievements.filter((_, idx) => idx % 2 === 0).map((achievement, index) => (
                        <AchievementDrawer
                            key={index}
                            title={achievement.title}
                            images={achievement.images}
                        />
                    ))}
                </div>
                {/* Right Column */}
                <div className="flex flex-col gap-6">
                    {achievements.filter((_, idx) => idx % 2 === 1).map((achievement, index) => (
                        <AchievementDrawer
                            key={index}
                            title={achievement.title}
                            images={achievement.images}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;