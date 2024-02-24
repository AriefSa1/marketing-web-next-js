import React from 'react'
import ButtonProduct from './ButtonProduct'

function ProductDetail({product}) {
  return (
    <div className='items-start justify-between'>
        {product.map((product, index) => (
          <div key={index} className='md:ml-10 sm:ml-2'>
            <h2 className='text-3xl font-bold'>{product.attributes.title}</h2>
            <div className='py-6'>
              Category :{" "}
              <a href='#' className='text-base text-gray-500 hover:underline cursor-pointer'>{product.attributes.category.data.attributes.name}</a>
            </div>
            {product.attributes.description.map((desc, index) => (
              <div key={index} className= 'max-w-screen-md max-h-[50px] mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                <p>{desc.children[0].text}</p>
              </div>
            ))}
          </div>
        ))}
        <ButtonProduct />
    </div>
  )
}

export default ProductDetail