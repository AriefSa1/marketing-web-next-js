import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

function CategoryItem({ categoryList, onCategoryChange }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [selectedCategory, setSelectedCategory] = useState('');

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
        
            return params.toString()
        },
        [searchParams.getAll('category')]
    )


    const handleSelectCategory = (e) => {
        const categoryValue = e.target.value;
        if (categoryValue !== '') {
            router.push(pathname + '?' + createQueryString("category", categoryValue))
            setSelectedCategory(categoryValue || searchParams.get('category'));
        } else {
            router.push(pathname)
        }
        setSelectedCategory(categoryValue || searchParams.get('category'));
        // onCategoryChange(categoryValue || searchParams.get('category'));
    };

    useEffect(() => {
        onCategoryChange(selectedCategory || searchParams.get('category'));
    }, [selectedCategory, onCategoryChange])


    return (
        <div className='flex items-center gap-2 mx-auto mt-8'>
            <label htmlFor="HeadlineAct" className="block text-[20px] font-extrabold"> Filter Category : </label>
            <select
                name="HeadlineAct"
                id="HeadlineAct"
                value={selectedCategory}
                onChange={handleSelectCategory}
                className="mt-1.5 w-48 p-4 rounded-md font-bold text-[16px] text-pretty text-gray-700"
            >
                <option value="">Select Filter</option>
                {categoryList.map((category, index) => (
                    <option className='p-4' key={index} value={category.attributes.name}>{category.attributes.name}</option>
                ))}
            </select>
        </div>
    );
}

export default CategoryItem;
