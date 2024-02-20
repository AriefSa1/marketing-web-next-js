import React from 'react'

function DesciptionDetail({product}) {
  console.log(product)
  return (
    <div className='md:mx-20 sm:mx-0 bottom-0'>
      <div className='mb-6'>
        <h1 className='text-xl font-semibold'>Deskripsi</h1>
      </div>
      {product.map((product, index) => (
        <div key={index}>
          {product.attributes.description.map((desc, index) => (
            <div key={index}>
              {desc.children.map((desc, index) => (
                <div key={index}>
                  <p className='pt-4'>{desc.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default DesciptionDetail