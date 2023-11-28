'use client';

import React, { useState } from 'react';
import Nav from './components/nav';
import Hero from './components/Hero';
import Side from './components/Side';
const page = () => {
    const [refresh, setRefresh] = useState(false);

    return (
        <div className='flex w-full gap-3'>
            <div className='w-full m-5 pr-[350px]'>
                <Nav setRefresh={setRefresh} />
                <Hero setRefresh={setRefresh} />
            </div>
            <div className='border-solid h-screen w-[350px] fixed right-0 top-0'>
                <Side setRefresh={setRefresh} />
            </div>
        </div>
    );
};

export default page;
