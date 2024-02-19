'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../../_utils/GlobalApi'

function ProductSection() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        getLatestProduct_()
    },[])

    const getLatestProduct_ = () => {
        GlobalApi.getLatestProduct().then(resp => {
            setProductList(resp.data.data)
        })
    }

  return (
    <div className='mx-auto mt-16 shadow-md'>
        <ProductList productList={productList} />
    </div>
  )
}

export default ProductSection