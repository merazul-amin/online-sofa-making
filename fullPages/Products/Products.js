import Product from '@/components/Product/Product';
import React from 'react';
import products from '/public/products.json';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Link from 'next/link';


const Products = () => {
    return (
        <div className='w-[90%] mx-auto my-8'>
            <div className='text-center my-10'>
                <Typography variant='h3'>Our Products</Typography>
                <p>Here is some photos of our products which we make. <br /> You can lookup all those products and give order in online.</p>
                <p>For Order call or give message our whatsapp number or email us. For Contact info <Link className='underline text-blue-600' href={'/contact_us'}>Click here.</Link></p>
                <p>لطلب الاتصال أو إرسال رسالة على رقم whatsapp الخاص بنا أو مراسلتنا عبر البريد الإلكتروني. للحصول على معلومات الاتصال انقر هنا.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center align-middle'>
                {
                    products?.map(product => <Product product={product} key={product.id} />)
                }
            </div>
        </div>
    );
};

export default Products;

