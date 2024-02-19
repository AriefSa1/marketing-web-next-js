import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productList }) {
  const limitedProductList = productList.slice(0, 8);
  return (
    <div className='p-4'>
        <h1 className='flex mb-8 items-center justify-center text-[20px] font-extrabold'>PRODUCT LIST</h1>
        <div className='mx-auto gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-screen-xl'>
        {limitedProductList.map((product, index) => (
            <ProductItem key={index} product={product} />
        ))}
        </div>
    </div>
  );
}

export default ProductList;