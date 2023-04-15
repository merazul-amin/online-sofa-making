import React from 'react';
import products from '/public/products.json';


const Products = () => {
    console.log(products)
    return (
        <div>
            {products.map(data => 'hello')}
        </div>
    );
};

export default Products;

