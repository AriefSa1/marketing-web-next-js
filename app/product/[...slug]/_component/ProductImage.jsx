import React from 'react'
import Image from 'next/image'

function ProductImage({product}) {
  return (
    <div>
        {product.map((product, index) => (
            <div key={index}>
                <Image 
                    src={product.attributes.thumbnail.data.attributes.url} 
                    alt={product.attributes.title} 
                    width={480} 
                    height={480} 
                    className='items-start rounded-lg object-cover' 
                />
            </div>
        ))}
    </div>
  )
}

export default ProductImage