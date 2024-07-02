import { Image } from '@nextui-org/react';
import React from 'react';

const Achievments = () => {
    return (
        <div className='my-24 mx-auto'>
            <h1 className='underline text-4xl font-pop font-bold text-center mb-10'>Achievements</h1>
            <div className='flex flex-wrap gap-5 justify-center'>
                <div>
                    <Image
                        isBlurred
                        width="396px"
                        src="/images/certificate_page-0001.jpg"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Web Development</h1>
                </div>
                <div>
                    <Image
                        isBlurred
                        width="396px"
                        src="/images/Samiur Rahman Wasi.jpg"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Competitive Programing</h1>
                </div>

                <div>
                    <Image
                        isBlurred
                        width="396px"
                        src="/images/Screenshot 2024-06-27 010101.png"
                        alt="NextUI Album Cover"
                    />
                    <h1 className='text-center font-pop'>Communication</h1>
                </div>

            </div>
        </div>
    );
};

export default Achievments;