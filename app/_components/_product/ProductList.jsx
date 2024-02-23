import React, { useState } from 'react';
import ProductItem from './ProductItem';

function ProductList({ count, productList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = count;
  const totalPages = Math.ceil(productList.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProductList = productList.slice(startIndex, endIndex);

  return (
    <div className='p-4'>
      <div className='flex mb-8 items-center justify-between'>
        <h1 className='text-[20px] font-extrabold md:mx-48 sm:mr-12'>
          PRODUCT LIST
        </h1>
        {itemsPerPage === 4 && (
          <div className='flex items-center mt-4 mb-4 md:mx-48 sm:mx-12 gap-4'>
            <button onClick={() => handlePageChange(currentPage - 1)} className='bg-fuchsia-600 hover:bg-fuchsia-800 rounded-full p-2 px-4 text-white font-bold'>↩</button>
            <button onClick={() => handlePageChange(currentPage + 1)} className='bg-fuchsia-600 hover:bg-fuchsia-800 rounded-full p-2 px-4 text-white font-bold'>↪</button>
          </div>
        )}
        {itemsPerPage === 8 && (
          <div className='flex items-center mt-4 mb-4 md:mx-48 sm:mx-12'>
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)} className='bg-fuchsia-600 hover:bg-fuchsia-800 rounded-full p-2 px-4 text-white font-bold'>↩</button>
            )}
            {itemsPerPage === 4 && (
              <span className='mx-8'>
                {currentPage} / {totalPages}
              </span>
            )}
            {itemsPerPage === 8 && (
              <span className='mx-8'>
                {currentPage} / {totalPages}
              </span>
            )}
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)} className='bg-fuchsia-600 hover:bg-fuchsia-800 rounded-full p-2 px-4 text-white font-bold'>↪</button>
            )}
          </div>
        )}
      </div>
      <div className='mx-auto gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-screen-xl'>
        {currentProductList.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;