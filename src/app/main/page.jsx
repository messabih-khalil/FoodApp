'use client';

import React from 'react';
import Nav from './components/nav';
import Hero from './components/Hero';
import Side from './components/Side';
const page = () => {
    return (
        <div className='flex w-full gap-3'>
            <div className='w-full m-5 pr-[350px]'>
                <Nav />
                <Hero />
            </div>
            <div className='border-solid h-screen w-[350px] fixed right-0 top-0'>
                <Side />
            </div>
        </div>
    );
};

export default page;
