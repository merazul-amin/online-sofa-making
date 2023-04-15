import React from "react";
import Image from "next/image";
import Image404 from "@/public/images/errorPage/404.png";
import Image404bg from "@/public/images/errorPage/404-bg.png"
import Link from "next/link";
import { Button } from "@mui/material";

const Page404 = () => {
    return (
        <div className="error-bg">
            <div className="h-[100vh] align-center flex">
                <div className="container mx-auto h-[100vh]">
                    <div className="h-screen flex flex-col lg:flex-row items-center justify-center">
                        <div className="w-full flex flex-col items-center lg:items-start">
                            <Image src={Image404} alt={"404"} />
                            <p className="text-christalle font-mulish font-normal text-x55">
                                Oops... <br />
                                Page not found...
                            </p>
                            <div className="my-5">
                                <Link href={'/'}>
                                    <Button variant="contained" style={{ backgroundColor: '#1565c0' }}>Go to Home</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full mt-10 lg:mt-0">
                            <Image src={Image404bg} alt="Image404bg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404;