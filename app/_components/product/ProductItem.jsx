import React from 'react'
import Image from 'next/image'

function ProductItem({product}) {
    return (
        <>
            <div className='border border-spacing-2'>
                <Image 
                    src={product.attributes.thumbnail.data.attributes.url} 
                    alt={product.attributes.title} 
                    width={400} 
                    height={350}
                    className='rounded-t-lg h-[200px] object-cover w-full'
                />
                <div className='p-4'>
                    <h2 className='text-[14px] text-left font-semibold'>{product.attributes.title}</h2>
                    <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        {product.attributes.description.map((desc, index) => (
                            <div key={index}>
                                {desc.children.map((item, index) => (
                                    <p key={index}>{item.text}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <a href="#" className="group mt-4 mb-2 p-4 inline-flex items-center gap-1 text-sm font-medium text-fuchsia-600">
                    Shop Now
                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                    </span>
                </a>
            </div>
        </>
    )
}

export default ProductItem