import ChairIcon from '@mui/icons-material/Chair'
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    return (
        <div className="px-4 pt-5 mx-auto bg-[#1976d2] text-white lg:px-8">
            <div className="grid gap-8 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <a
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <ChairIcon sx={{ mr: 1 }} />
                        <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                            HOME DACOR  (ديكور المنزل)

                        </span>
                    </a>
                    <div className="mt-4 lg:max-w-sm">
                        <p className="text-sm text-white">
                            We are always with you for the Home furniture. We are your trustable furniture maker.
                        </p>
                        <p className="mt-4 text-sm text-white">
                            We have a dedicated team, who makes furniture and home decoration according to your requirement and choice.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:col-span-4 md:grid-cols-3">
                    <div>
                        <p className="font-semibold tracking-wide text-white">
                            Category
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                Sofa
                            </li>
                            <li>
                                Curtain
                            </li>
                            <li>
                                Wall Paper
                            </li>
                            <li>
                                Majlish
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-white">
                            فئة
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                كنبة
                            </li>
                            <li>
                                ستارة
                            </li>
                            <li>
                                ورق الجدران
                            </li>
                            <li>
                                مجليش
                            </li>
                        </ul>
                    </div>
                    <div className='mt-5 md:mt-0'>
                        <p className="font-semibold tracking-wide mb-2 text-white">
                            Contact Info
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <a href='tel:+0097466721734'>+0097466721734</a>
                        </p>
                        <p className="flex items-center my-2">
                            <WhatsAppIcon />
                            <a href='tel:+0097466721734' className='ml-5'>+0097466721734</a>
                        </p>
                        <p className="flex items-center">
                            <EmailIcon />
                            <a className='ml-5' href="mailto:qataronlinesofamaking@gmail.com">qataronlinesofamaking@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-5 border-t sm:flex-row">
                <p className="text-sm text-white">
                    © Copyright 2025 HOME DACOR Inc. All rights reserved.
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <Link
                        href="https://www.instagram.com/onlinesofamaking/?igshid=MWQ2ODkyMjM%3D&fbclid=IwAR08nFn-K9gs4zdl0qDBav9Cay4xpQLivEUGHh-Z8dtDVQlvlU38fzWs7_E"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                            <circle cx="15" cy="15" r="4" />
                            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.facebook.com/profile.php?id=100089544948754&mibextid=LQQJ4d"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;