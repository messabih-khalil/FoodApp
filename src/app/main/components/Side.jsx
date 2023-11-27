'use client';

import React from 'react';
import Image from 'next/image';
import TableImage from '@/assets/images/table.png';
import QrGenerator from './qr-generator';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

export default function Side() {
    const orderedTable = (
        JSON.parse(localStorage.getItem('tablesOrder')) || []
    ).map((el) => Object.keys(el)[0]);

    return (
        <div className='bg-[#FFD099] h-full p-6 space-y-5 relative'>
            {/*  */}
            <p className='font-bold text-lg mt-5'>Table Orders : </p>

            {/*  */}

            <div className='grid grid-cols-3 gap-5'>
                {orderedTable.map((el) => (
                    <div
                        className='rounded-md p-1 bg-white border-gray border-2'
                        key={el}
                    >
                        <div className='h-[70px] relative rounded-md overflow-hidden'>
                            <Image
                                src={TableImage}
                                fill
                                alt='image'
                                cover
                            />
                        </div>
                        {/*  */}
                        <p className='text-center'>{el}</p>
                    </div>
                ))}
            </div>

            {/*  */}

            <div className='pr-12 absolute bottom-[10px] w-full'>
                <Dialog>
                    <DialogTrigger className='w-full bg-gray-900 p-2 rounded-md cursor-pointer text-white'>
                        Generate Qr's
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className='text-center mb-5 '>
                                Table Orders
                            </DialogTitle>
                            <DialogDescription>
                                <QrGenerator data={orderedTable} />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
