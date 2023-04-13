import Typewriter from 'typewriter-effect';

const TopHeader = () => {
    return (
        <div className="px-4 bg-gradient-to-r from-gray-100 via-pink-200 to-gray-100 py-16 mx-auto md:max-w-full max-w-[1800px] md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points=" 8,5 8,1 16,1 16,5"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="9,15 1,15 1,5 23,5 23,15 15,15"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="22,18 22,23 2,23 2,18"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="9"
                                y="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                width="6"
                                height="4"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none bg-gradient-to-r from-pink-600 via-yellow-500 to-indigo-400 text-transparent bg-clip-text block">
                            Welcome You in the heaven of
                            <h4 className='bg-gradient-to-r text-right text-2xl from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text block'>
                                <Typewriter
                                    options={{
                                        strings: ['Online Sofa Making Platform'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h4>
                        </h2>
                        <p className="text-gray-500 md:text-lg">
                            We are one of the best furniture making company in Qatar. You can see al designs of furniture and can give order in online. We are always with you.
                        </p>
                    </div>
                    <div>
                        <p className='italic'>"Customer Satisfaction is our first priority."</p>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TopHeader;