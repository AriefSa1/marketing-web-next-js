'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi'
import Breadcrumb from '../../_components/Breadcrumb'
import ProductImage from './_component/ProductImage'
import ProductDetail from './_component/ProductDetail'
import DescriptionDetail from './_component/DesciptionDetail'

function page({params}) {
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
      getSingleProduct_()
  },[])

  const getSingleProduct_ = () => {
      GlobalApi.getSingleProduct({slug: params.slug}).then(resp => {
        setSingleProduct(resp.data.data)
      })
  }
  return (
    <div className='p-5 py-12 px-10 md:px-28 top-0'>
      <Breadcrumb slug={params.slug}/>
      <div className='flex flex-col items-start sm:flex-row justify-beetween mt-10 ml-28 gap-5 shadow-sm py-5'>
        <ProductImage product={singleProduct} />
        <ProductDetail product={singleProduct} />
      </div>
      <div className='flex flex-col item-center justify-center mt-10 gap-5'>
        <DescriptionDetail product={singleProduct} />
      </div>
    </div>
  )
}

export default page