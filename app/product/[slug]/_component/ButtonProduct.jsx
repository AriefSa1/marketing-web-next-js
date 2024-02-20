import React from 'react'

function ButtonProduct() {
  return (
    <div className='flex md:ml-10 sm:ml-2 pt-6'>
      <a href="#" className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-indigo-800 focus:outline-none focus:ring">
        <span className="font-medium text-white transition-colors group-active:text-indigo-500">
          Shop Now
        </span>
        <span className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </a>
    </div>
  )
}

export default ButtonProduct