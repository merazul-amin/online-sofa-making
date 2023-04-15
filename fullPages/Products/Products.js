import Product from '@/components/Product/Product';
import React from 'react';
import products from '/public/products.json';


const Products = () => {
    console.log(products)
    return (
        <div className='py-[25px] w-[90%] mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products?.map(product => <Product product={product} key={product.id} />)}
            </div>
        </div>
    );
};

export default Products;

