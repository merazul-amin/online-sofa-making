import { Button } from '@mui/material';
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const ContactUs = () => {
    return (
        <div>
            <section className="py-20 dark:bg-gray-800 dark:text-gray-50">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Contact us For Order</h1>
                        <p className="pt-2 pb-4">Give us Phone Call, or text in Whatsapp number or email us.</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Doha, Qatar</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <a href='tel:+0097466721734'>+0097466721734</a>
                            </p>
                            <p className="flex items-center">
                                <WhatsAppIcon />
                                <a href='tel:+0097466721734' className='ml-5'>+0097466721734</a>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <a href="mailto:qataronlinesofamaking@gmail.com">qataronlinesofamaking@gmail.com</a>
                            </p>
                            <p className="flex items-center">
                                <FacebookIcon />
                                <Link className='ml-5' href="https://www.facebook.com/profile.php?id=100089544948754&mibextid=LQQJ4d">Go To Facebook Page</Link>
                            </p>
                            <p className="flex items-center">
                                <InstagramIcon />
                                <Link className='ml-5' href="https://www.instagram.com/onlinesofamaking/?igshid=MWQ2ODkyMjM%3D&fbclid=IwAR08nFn-K9gs4zdl0qDBav9Cay4xpQLivEUGHh-Z8dtDVQlvlU38fzWs7_E">Go To Instagram Page</Link>
                            </p>
                        </div>
                    </div>
                    <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="Your Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 p-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" placeholder="Your Email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 p-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" placeholder='Write Your Message Here.' className="block w-full rounded-md focus:ring focus:ring-opacity-75 p-3 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                        </label>
                        <Button variant="contained" style={{ backgroundColor: 'purple' }}>Send Message</Button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;