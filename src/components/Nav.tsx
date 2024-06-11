'use client'
import React from "react";

export const Nav = () => {
    const navItems = [
        { link: 'Home', path: '/home' },
        { link: 'Pricing', path: '/pricing' },
        { link: 'Explore', path: '/explore' },
    ];

    return (
        <header className='w-full'>
            <nav className='py-7 lg:px-14 px-7'>
                <div className='flex justify-between items-center gap-8 text-base'>
                    {/* Logo */}
                    <h1>Veecert</h1>

                    {/* Nav Links */}
                    <ul className='md:flex space-x-12 hidden'>
                    {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <a href={path} className="block text-base first:font-medium text-black hover:text-slate-900">{link}</a>
                            </li>
                        ))}
                    </ul> 

                    {/* Button */}
                    <div className='space-x-12 lg:flex hidden items-center'>
                        <button className='text-bold px-4 py-3 leading-none text-gray-200 transition-all duration-100 shadow-lg rounded-lg focus:outline-none focus:shadow-outline bg-transparent hover:bg-slate-900 hover:text-white hover:font-bold'>Sign-up</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
