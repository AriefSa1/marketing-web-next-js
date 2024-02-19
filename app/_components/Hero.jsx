import React from 'react'

function Hero() {
  return (
    <section className="shadow-md bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Understand User Flow.
                    <strong className="font-extrabold text-fuchsia-700 sm:block"> Increase Conversion. </strong>
                </h1>
                <p className="mt-4 sm:text-xl/relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                    numquam ea!
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        className="block w-full rounded bg-fuchsia-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-fuchsia-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                        href="#"
                    >
                        Get Started
                    </a>

                    <a
                        className="block w-full rounded px-12 py-3 text-sm font-medium text-fuchsia-600 shadow hover:text-fuchsia-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                        href="#"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero