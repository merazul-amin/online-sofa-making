import React from 'react';

const AboutUs = () => {
    return (
        <div className='mb-10 lg:w-[70%] mx-auto'>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">

                <div className="flex flex-col lg:flex-row">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Actually who we are?
                        </h2>

                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-base text-gray-700">
                            We are a sofa and furniture making company committed to providing our clients with exceptional quality and service. Our team of skilled craftsmen and designers work collaboratively to create beautiful, functional and sustainable furniture pieces that are tailored to meet our clients' needs. With years of experience and a dedication to eco-friendliness, we are passionate about creating furniture that not only looks great, but also contributes to a better world. At our company, we believe that furniture is an extension of our clients' personalities and we take pride in working closely with them to create custom designs that reflect their individual style and taste.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col lg:flex-row">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            What we offer?
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-base text-gray-700">
                            We offer a wide range of high-quality, customizable furniture pieces to meet all your needs. Whether you're looking for a comfortable and stylish sofa, a functional and practical coffee table, or a luxurious and elegant bed, we have something to suit every taste and budget.

                            Our custom-made furniture is designed to fit perfectly into your home or office space, and our team of designers will work closely with you to ensure that every detail is just right. We use only the finest materials, including locally sourced hardwoods and eco-friendly fabrics, to create durable and sustainable furniture that will last for years to come.

                            In addition to our custom designs, we also offer a range of ready-made furniture pieces that are stylish and affordable. Our products are available in a variety of styles, from classic and traditional to modern and contemporary, so you can find the perfect piece to suit your personal style. Whatever your furniture needs, we have the expertise and experience to create the perfect solution for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;