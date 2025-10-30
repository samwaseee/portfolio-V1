import { Image } from '@nextui-org/react';
import React from 'react';

const Achievments = () => {
    return (
        <div className='my-48 mx-auto'>
            <h1 className='underline text-4xl font-pop font-bold text-center mb-10'>Achievements</h1>
            <div className='flex flex-wrap gap-5 justify-center'>
                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='h-[297px] transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-20'
                        src="/images/blackbelt.png"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Web Development</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-30'
                        src="/images/canvas.png"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Competitive Programing</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-30'
                        src="/images/EDGE_certificate.png"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>App Development</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-20'
                        src="/images/cybersecurity.png"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Cyber Security</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-20'
                        src="/images/Screenshot 2024-06-27 010101.png"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Communication</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-20'
                        src="/images/PowerBi.png"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Data Analysis</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-20'
                        src="/images/Samiur Rahman Wasi.jpg"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Competitive Programing</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-20'
                        src="/images/Samiur Rahman Wasi.png"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'> App Design</h1>
                </div>
                
                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-20'
                        src="/images/certificate_page-0001.jpg"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Web Development</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-20'
                        src="/images/bl.jpg"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Idea generation</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        className='transform transition-transform duration-300 hover:scale-105 md:hover:scale-150 hover:h-max hover:z-20'
                        src="/images/ieee.jpg"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>ICISET conference</h1>
                </div>

            </div>
        </div>
    );
};

export default Achievments;