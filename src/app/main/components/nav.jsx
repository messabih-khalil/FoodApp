import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBoxesPacking,
    faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import TableImage from '@/assets/images/table.png';

// =======
export default function nav() {


    
    return (
        <div className='flex w-full gap-x-11 m-5 justify-between items-center pr-12'>
            <div className='flex gap-2 items-center text-2xl'>
                <FontAwesomeIcon icon={faPizzaSlice} />
                <h1 className=' font-bold '> Pizza Swift </h1>
            </div>

            <Dialog>
                <DialogTrigger className='bg-[#FFD099] rounded-md py-2 px-5 font-medium space-x-2'>
                    <FontAwesomeIcon icon={faBoxesPacking} />
                    <span>To Tables</span>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className=' flex justify-center w-full m-3'>
                            {' '}
                            Available Tables
                        </DialogTitle>
                        <DialogDescription className='grid grid-cols-3 gap-2 '>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
                                <div
                                    className=' flex items-center flex-col pb-1 rounded-xl border-[#FFD099] border-2'
                                    key={e}
                                >
                                    <Image
                                        src={TableImage}
                                        alt='Picture of the author'
                                        width={100}
                                        height={100}
                                    />

                                    <p className='text-md font-bold'>
                                        Table {e}
                                    </p>
                                </div>
                            ))}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
