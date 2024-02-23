'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../../_utils/GlobalApi'

function ProductSection({ count, category }) {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if (category) {
            getProductByCategory_(category);
        } else {
            getLatestProduct_();
        }
    }, [category]);

    const getLatestProduct_ = () => {
        GlobalApi.getLatestProduct().then(resp => {
            console.log("Data :", resp.data.data)
            setProductList(resp.data.data)
        })
    }

    const getProductByCategory_ = (category) => {
        GlobalApi.getProductByCategory({category}).then(resp => {
            console.log("Data Categ :", resp.data.data)
            setProductList(resp.data.data)
        })
    
    }

  return (
    <div className='mx-auto mt-4 shadow-md'>
        <ProductList count={count} productList={productList} />
    </div>
  )
}

export default ProductSection