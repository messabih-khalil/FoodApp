'use client';
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import CounterBox from './CounterBox';

export default function Hero({ setRefresh }) {
    const addToBucket = (item = {}, counter) => {
        const otherOrders =
            JSON.parse(localStorage.getItem('currentOrder')) || [];

        localStorage.setItem(
            'currentOrder',
            JSON.stringify([...otherOrders, { ...item, counter }])
        );

        setRefresh((prev) => !prev);
    };

    // const fake data

    const fakeData = [
        {
            id: 1,
            name: 'pizza simple',
            imageUrl:
                'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
            category: '',
            price: 200,
        },
        {
            id: 2,
            name: 'pizza simple',
            imageUrl:
                'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
            category: '',
            price: 200,
        },
        {
            id: 3,
            name: 'pizza simple',
            imageUrl:
                'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
            category: '',
            price: 200,
        },
        {
            id: 4,
            name: 'pizza simple',
            imageUrl:
                'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
            category: '',
            price: 200,
        },
    ];

    return (
        <div className='p-6'>
            <h1 className='text-xl font-bold mb-5'>pizza</h1>
            <div className='grid grid-cols-4 gap-4'>
                {fakeData.map((el) => (
                    <Card
                        className='p-2 bg-[#FFD099]'
                        key={el}
                    >
                        <CardHeader className='h-[150px] relative rounded-md overflow-hidden'>
                            <Image
                                src={el.imageUrl}
                                fill
                                alt='image'
                                cover
                            />
                        </CardHeader>
                        <CardContent className='w-full p-0 space-y-2 py-2'>
                            <p className='font-bold'>{el.name}</p>
                            <p className='text-gray-500'>{el.price}.da</p>
                        </CardContent>
                        <CardFooter className='flex rounded-md p-0 gap-2 border bg-white'>
                            <CounterBox
                                addToBucket={addToBucket}
                                product={{
                                    name: el.name,
                                    price: el.price,
                                    id: el.id,
                                }}
                            />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
