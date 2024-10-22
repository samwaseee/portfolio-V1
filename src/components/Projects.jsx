import React from 'react';
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";

const Projects = () => {
    return (
        <div className='z-50'>
            <h1 className='underline text-4xl font-pop font-bold text-center mb-10'>Projects</h1>



            <Card
                data-aos="zoom-in-down"
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-fit"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-large font-medium">Starlight University</h3>
                                    <p className="text-small text-foreground/80">MERN Stack</p>
                                    <h1 className=" font-semibold text-foreground/90 mt-2">A Full-Stack School Management System (Team project)</h1>
                                    <ul className="text-small text-foreground/80 space-y-5">Key Features:
                                        <li>
                                            Custom Authentication System: Secure login with encrypted credentials allows for robust data protection, ensuring that sensitive information remains confidential. This addresses the common issue of unauthorized access in educational systems.
                                        </li>
                                        <li>
                                            Integrated Attendance Tracking: Both students and teachers can monitor attendance records in real-time, providing insights into attendance patterns and supporting timely interventions for absenteeism.
                                        </li>
                                        <li>
                                            Role-Based Access Control: Different access levels for students, teachers, parents and administrators streamline permissions, allowing users to focus on their specific tasks without navigating unnecessary features.
                                        </li>
                                    </ul>
                                </div>
                                <a href="https://starlight-un-edu.vercel.app">
                                    <Button>Live Site</Button>
                                </a>
                            </div>


                        </div>

                        <a
                            href='https://starlight-un-edu.vercel.app'
                            className="relative col-span-6 md:col-span-4">
                            <Image
                                isBlurred
                                alt="Album cover"
                                className="object-cover hover:scale-105"
                                height={200}
                                shadow="md"
                                src="/images/project_1.png"
                                width="100%"
                            />
                        </a>

                    </div>
                </CardBody>
            </Card>
            <Card
                data-aos="zoom-in-up"
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-fit my-24"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <a
                            href='https://care-camp-a12.web.app'
                            className="relative col-span-6 md:col-span-4">
                            <Image
                                isBlurred
                                alt="Album cover"
                                className="object-cover hover:scale-105"
                                height={200}
                                shadow="md"
                                src="/images/project_2.png"
                                width="100%"
                            />
                        </a>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-large font-medium">Care Camp</h3>
                                    <p className="text-small text-foreground/80">MERN Stack</p>
                                    <h1 className=" font-semibold text-foreground/90 mt-2">A Full-Stack Medical Camp Management System</h1>
                                    <ul className="text-small text-foreground/80 space-y-5">Key Features:
                                        <li>Personalized Dashboards: Participants can View and manage your registered
                                            camps, track your registration status, and keep a history of your activities
                                            and the Organizers can Manage camp details, view participant lists, and
                                            track registrations and feedback.</li>
                                        <li>
                                            Secure Payment Processing: Make payments safely and securely through
                                            integrated payment gateways, and keep track of all your transactions in one
                                            place.
                                        </li>
                                        <li>
                                            Comprehensive Camp Listings: Browse through detailed listings of available
                                            medical camps, complete with images, fees, dates, times, locations,
                                            healthcare professionals, and participant limits.
                                        </li>
                                    </ul>
                                </div>
                                <a href="https://care-camp-a12.web.app">
                                    <Button>Live Site</Button>
                                </a>
                            </div>


                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card
                data-aos="zoom-in-down"
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-fit my-24"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center  md md:overflow-hidden">
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-large font-medium">BookedInn</h3>
                                    <p className="text-small text-foreground/80">MERN Stack</p>
                                    <h1 className=" font-semibold text-foreground/90 mt-2">A Full-Stack Hotel Reservation Web Application</h1>
                                    <ul className="text-small text-foreground/80 space-y-5">Key Features:
                                        <li>Room Reservations: Guests can make reservations, modify check-in dates,
                                            and cancel them (except for the day before check-in).</li>
                                        <li>
                                            Room Reviews: Visitors can read, write(if they book the specific room), and
                                            view the average rating for every room.
                                        </li>
                                        <li>
                                            Simple Registration and Login: Users can quickly sign up or log in using their
                                            email or social media accounts, making access convenient and secure.
                                        </li>
                                    </ul>
                                </div>
                                <a href="https://bookedinn-a11.web.app">
                                    <Button>Live Site</Button>
                                </a>
                            </div>


                        </div>
                        <a
                            href='https://bookedinn-a11.web.app/'
                            className="relative col-span-6 md:col-span-4">
                            <Image
                                isBlurred
                                alt="Album cover"
                                className="object-cover hover:scale-105"
                                shadow="md"
                                src="/images/project_3.png"
                                width="100%"
                            />
                        </a>
                    </div>
                </CardBody>
            </Card>
            <Card
                data-aos="zoom-in-up"
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-fit"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center  overflow-y-hidden">
                        <a
                            href='https://sam-travels-a10.web.app'
                            className="relative col-span-6 md:col-span-4">
                            <Image
                                isBlurred
                                alt="Album cover"
                                className="object-cover hover:scale-105"
                                shadow="md"
                                src="/images/project_4.png"
                                width="fit"
                            />
                        </a>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-large font-medium">Sam Travel</h3>
                                    <p className="text-small text-foreground/80">MERN Stack</p>
                                    <h1 className=" font-semibold text-foreground/90 mt-2">A Full-Stack Collaborative Tourist Spot Management System</h1>
                                    <ul className="text-small text-foreground/80 space-y-5">Key Features:
                                        <li>Tourist Spot Management: Add, update, and delete tourist spots to share
                                            with the community.</li>
                                        <li>
                                            Dark Theme Toggle: Switch between light and dark themes to customize
                                            your user experience.
                                        </li>
                                        <li>
                                            Collaborative Platform: View and engage with tourist spots added by other
                                            users.
                                        </li>
                                    </ul>
                                </div>
                                <a href="https://sam-travels-a10.web.app">
                                    <Button>Live Site</Button>
                                </a>
                            </div>


                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Projects;