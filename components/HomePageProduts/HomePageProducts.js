import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Button } from '@mui/material';


const HomePageProducts = () => {
    return (
        <div className='my-20 p-10 bg-[rgb(100,80,228)]'>
            <Typography variant='h4' sx={{ color: 'white', textAlign: 'center', }}>Our Products</Typography>
            <p className='text-white text-center mb-5'>Here is some sample products we offer for you. <Link href={'/products'} className='text-yellow-400 underline'>Click Here</Link> for more products.</p>
            <div className='w-[90%] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center'>
                <Card sx={{ maxWidth: 300 }}>
                    <img src="/images/curtain.jpg" alt="" className='h-[200px] w-full' />
                    <CardContent>
                        <Typography variant='h5'>
                            Curtain
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <img src="/images/green-sofa.jpg" alt="" className='h-[200px] w-full' />
                    <CardContent>
                        <Typography variant='h5'>
                            Green Sofa
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <img src="/images/majlish.jpg" alt="" className='h-[200px] w-full' />
                    <CardContent>
                        <Typography variant='h5'>
                            Majlish
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <img src="/images/pink-sofa.jpg" alt="" className='h-[200px] w-full' />
                    <CardContent>
                        <Typography variant='h5'>
                            Pink Color Sofa
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className='text-center mt-5'>
                <Link href={'/products'}>    <Button variant='contained' color='secondary' style={{ background: 'purple' }}>
                    Show More
                </Button></Link>
            </div>

        </div>
    );
};

export default HomePageProducts;