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

            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}>
                <div className="p-4 grid gap-4">
                    {images.map((img, index) => {
                        const src = typeof img === 'string' ? img : img.src;
                        const href = img?.href;

                        const imgElement = (
                            <img
                                key={index}
                                src={src}
                                alt={img?.alt ?? `${title} ${index + 1}`}
                                className="w-full h-auto object-contain rounded-lg"
                                loading="lazy"
                            />
                        );

                        return href ? (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-lg overflow-hidden"
                                aria-label={`${title} image ${index + 1} (opens in new tab)`}
                            >
                                {imgElement}
                            </a>
                        ) : (
                            <div key={index} className="block rounded-lg overflow-hidden">
                                {imgElement}
                            </div>
                        );
                    })}
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
                { src: "/images/certificate_page-0001.jpg" },
                { src: "/images/Jira.png", href: "https://simpli-web.app.link/e/0f5n03eEXXb" },
            ]
        },

        {
            title: "AI & ML",
            images: [
                { src: "/images/LLM.png", href: "https://simpli-web.app.link/e/LsJPG5fTVXb" },
                { src: "/images/NLP.png", href: "https://simpli-web.app.link/e/1y9Wh84SVXb" },
                { src: "/images/Introduction to NN.png", href: "https://simpli-web.app.link/e/g7RhVZICZXb" },
                { src: "/images/Gemini for Google Workspace.png", href: "https://simpli-web.app.link/e/qQ9v6AJGUXb" },
                { src: "/images/Generative AI.png", href: "https://simpli-web.app.link/e/0VH0gw3MWXb" },
                { src: "/images/Tensorflow.png", href: "https://simpli-web.app.link/e/gDLWELZH0Xb" },
                { src: "/images/Prompt Engineering.png", href: "https://simpli-web.app.link/e/x7n4Ca1MWXb" },
                { src: "/images/Agentic AI.png", href: "https://simpli-web.app.link/e/UsWtYbKPWXb" },
            ]
        },

        {
            title: "App Development",
            images: [{ src: "/images/EDGE_certificate.png" }]
        },

        {
            title: "Data Analysis",
            images: [
                { src: "/images/Data Analyst 101.png", href: "https://simpli-web.app.link/e/DDSC4gKSVXb" },
                { src: "/images/PowerBi.png", href: "https://simpli-web.app.link/e/lsa4OqB0SXb" },
                { src: "/images/Data Analytics.png", href: "https://simpli-web.app.link/e/F8Ik6l6FUXb" },
                { src: "/images/Data Analytics with Gen AI.png", href: "https://simpli-web.app.link/e/VSnYaHXMWXb" },
                { src: "/images/SQL Analytics and BI.png", href: "https://simpli-web.app.link/e/ipseA2XPWXb" },
            ]
        },

        {
            title: "Cloud",
            images: [
                { src: "/images/AWS cloud adoptation framework.png", href: "https://simpli-web.app.link/e/WAhIJJqQWXb" },
                { src: "/images/Basics of AZURE.png", href: "https://simpli-web.app.link/e/fsyvEugQWXb" },
                { src: "/images/Google Cloud Operations.png", href: "https://simpli-web.app.link/e/cUPrirxQWXb" },
                { src: "/images/Data Transformation with Google Cloud.png", href: "https://simpli-web.app.link/e/f6rkiP8NXXb" },
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
            title: "Cyber Security",
            images: [
                { src: "/images/cybersecurity.png", href: "https://www.linkedin.com/learning/certificates/7650954fed6d8635f3a42fb7a715b46c1979c8dbd2193010a8b9fa56b03ae7ec?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSsOfl3VeSaCiCY%2BI9DNlHQ%3D%3D" },
                { src: "/images/CISSP.png", href: "https://simpli-web.app.link/e/qCUuiKRtZXb" },
            ]
        },

        {
            title: "Communication Skills",
            images: [
                { src: "/images/Screenshot 2024-06-27 010101.png", href: "https://www.linkedin.com/learning/certificates/e8c1e49ac408303ef69f50f904f58a1793fb141976747775452849b5ae2b3280?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSsOfl3VeSaCiCY%2BI9DNlHQ%3D%3D" },
                { src: "/images/10 minutes school.png", href: "https://10minuteschool.com/certificate/667d3ada155e1" }
            ]
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