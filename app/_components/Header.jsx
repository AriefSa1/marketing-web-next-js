// Import React hooks and components
'use client'
import React from 'react';
import Image from 'next/image';
import { UserButton, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';

function Header() {
    // Navigation items
    const navItems = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Product',
            href: '/product'
        },
        {
            name: 'Service',
            href: '/service'
        },
        {
            name: 'Project',
            href: '/project'
        },
        {
            name: 'Blog',
            href: '/blog'
        }
    ];

    return (
        <header className="relative w-full bg-white">
            <div className="mx-auto max-w-screen-2xl border-gray-400 shadow-sm px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center  justify-around">
                    <div className="md:flex md:items-center md:gap-12">
                        <Image src="/logo.svg" alt="logo" width={90} height={100} />
                    </div>
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-md">
                                {navItems.map((item, index) => (
                                    <li key={index} className='cursor-pointer'>
                                        <a className="text-gray-500 transition hover:font-semibold hover:text-fuchsia-600" href={item.href}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4 px-10">
                        <SignedIn>
                            <UserButton afterSignOutUrl='/' userProfileMode='navigation' userProfileUrl='/profile' />
                        </SignedIn>
                        <SignedOut>
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-fuchsia-600 px-5 py-2.5 text-sm font-medium hover:bg-fuchsia-700 text-white shadow"
                                    href="/auth/sign-in"
                                >
                                    Login
                                </a>
                                <a
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-fuchsia-600"
                                    href="/auth/sign-up"
                                >
                                    Register
                                </a>
                            </div>
                        </SignedOut>
                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;