'use client'
import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import GlobalApi from '../../_utils/GlobalApi'
import ProductSection from '../_product/ProductSection';

function CategorySection() {
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        getCategory_();
    }, []);

    const getCategory_ = () => {
        GlobalApi.getCategory().then(resp => {
            console.log("Data :", resp.data.data)
            setCategoryList(resp.data.data)
        })
    }
  return (
    <>
        <div className='relative px-12 pt-14'>
            <CategoryItem categoryList={categoryList} onCategoryChange={handleCategoryChange} />
        </div>
        <ProductSection count={8} category={selectedCategory} />
    </>
  )
}

export default CategorySection