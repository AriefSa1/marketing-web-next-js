import React from 'react'

function ButtonProduct() {
  return (
    <div className='flex md:ml-10 sm:ml-2 pt-6'>
      <a
        className="group relative inline-flex items-center overflow-hidden rounded-lg border border-black px-6 py-2 text-white focus:outline-none focus:ring active:text-white"
        href="#"
      >
        <span
          className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        ></span>
        <span className="relative inline-block px-8 py-3 text-sm font-bold uppercase tracking-widest">
          Shop Now
        </span>
        <span className="absolute -end-full transition-all group-hover:end-4">
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